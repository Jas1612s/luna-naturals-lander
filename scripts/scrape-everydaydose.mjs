import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const BASE = '/Users/brainor/my-clone';
const OUT = join(BASE, 'docs/design-references');
const TMP = join(BASE, 'tmp');
mkdirSync(OUT, { recursive: true });
mkdirSync(TMP, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  console.log('Navigating to everydaydose.com...');
  await page.goto('https://www.everydaydose.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });

  // Wait for Cloudflare challenge to resolve
  console.log('Waiting for Cloudflare challenge...');
  try {
    await page.waitForFunction(() => !document.title.includes('moment'), { timeout: 30000 });
  } catch {
    console.log('Cloudflare timeout, continuing...');
  }

  // Wait for page to fully load after Cloudflare redirect
  console.log('Waiting for page to stabilize...');
  await page.waitForTimeout(8000);

  try {
    await page.waitForLoadState('networkidle', { timeout: 15000 });
  } catch {
    console.log('Network idle timeout, continuing...');
  }

  const title = await page.title();
  console.log('Page title:', title);

  // Save full HTML
  const html = await page.content();
  writeFileSync(join(TMP, 'everydaydose-full.html'), html);
  console.log('HTML saved, length:', html.length);

  // Desktop screenshot (1440px)
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: join(OUT, 'everydaydose-desktop-full.png'), fullPage: true });
  console.log('Desktop screenshot saved');

  // Extract page topology
  const sections = await page.evaluate(() => {
    const result = [];
    const body = document.body;
    // Try sections first, then direct body children
    let els = [...body.querySelectorAll('section, [class*="section"], header, footer, nav, main')];
    if (els.length === 0) {
      els = [...body.children].filter(el => el.getBoundingClientRect().height > 50);
    }
    els.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      result.push({
        index: i,
        tag: el.tagName.toLowerCase(),
        id: el.id || '',
        classes: el.className?.toString().substring(0, 300) || '',
        text: el.textContent?.substring(0, 500)?.trim() || '',
        top: Math.round(rect.top + window.scrollY),
        height: Math.round(rect.height),
        childCount: el.children.length,
      });
    });
    return result;
  });
  console.log('Sections found:', sections.length);
  writeFileSync(join(TMP, 'everydaydose-sections.json'), JSON.stringify(sections, null, 2));

  // Extract all assets
  const assets = await page.evaluate(() => {
    return {
      images: [...document.querySelectorAll('img')].map(img => ({
        src: img.src || img.currentSrc,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight,
        loading: img.loading,
        srcset: img.srcset?.substring(0, 300),
      })),
      videos: [...document.querySelectorAll('video')].map(v => ({
        src: v.src || v.querySelector('source')?.src,
        poster: v.poster,
        autoplay: v.autoplay,
        loop: v.loop,
        muted: v.muted,
      })),
      backgroundImages: [...document.querySelectorAll('*')].filter(el => {
        const bg = getComputedStyle(el).backgroundImage;
        return bg && bg !== 'none';
      }).slice(0, 50).map(el => ({
        url: getComputedStyle(el).backgroundImage.substring(0, 300),
        element: el.tagName + '.' + (el.className?.toString().split(' ')[0] || ''),
      })),
      svgCount: document.querySelectorAll('svg').length,
      fonts: [...new Set([...document.querySelectorAll('*')].slice(0, 300).map(el => getComputedStyle(el).fontFamily))],
      favicons: [...document.querySelectorAll('link[rel*="icon"]')].map(l => ({ href: l.href, sizes: l.sizes?.toString() })),
      stylesheets: [...document.querySelectorAll('link[rel="stylesheet"]')].map(l => l.href),
      fontLinks: [...document.querySelectorAll('link[rel="preconnect"], link[href*="font"], link[href*="typekit"]')].map(l => l.href),
      metaTags: [...document.querySelectorAll('meta')].map(m => ({ name: m.name || m.getAttribute('property'), content: m.content?.substring(0, 200) })).filter(m => m.name),
    };
  });
  writeFileSync(join(TMP, 'everydaydose-assets.json'), JSON.stringify(assets, null, 2));
  console.log('Assets:', assets.images.length, 'images,', assets.videos.length, 'videos,', assets.svgCount, 'SVGs');

  // Extract all text content
  const textContent = await page.evaluate(() => {
    const headings = [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')].map(h => ({
      level: h.tagName,
      text: h.textContent.trim(),
      classes: h.className?.toString().substring(0, 200),
    }));
    const links = [...document.querySelectorAll('a')].map(a => ({
      text: a.textContent.trim().substring(0, 150),
      href: a.href,
    }));
    const buttons = [...document.querySelectorAll('button, [role="button"], input[type="submit"]')].map(b => ({
      text: b.textContent?.trim().substring(0, 150) || b.value,
      classes: b.className?.toString().substring(0, 150),
    }));
    const paragraphs = [...document.querySelectorAll('p')].map(p => p.textContent.trim().substring(0, 300));
    return { headings, links, buttons, paragraphs };
  });
  writeFileSync(join(TMP, 'everydaydose-text.json'), JSON.stringify(textContent, null, 2));
  console.log('Text: ', textContent.headings.length, 'headings,', textContent.paragraphs.length, 'paragraphs');

  // Extract global styles
  const styles = await page.evaluate(() => {
    const cs = getComputedStyle(document.body);
    const allColors = new Set();
    [...document.querySelectorAll('*')].slice(0, 500).forEach(el => {
      const s = getComputedStyle(el);
      [s.color, s.backgroundColor, s.borderColor].forEach(c => {
        if (c && c !== 'rgba(0, 0, 0, 0)' && c !== 'rgb(0, 0, 0)') allColors.add(c);
      });
    });
    const fontSizes = [...new Set([...document.querySelectorAll('*')].slice(0, 500).map(el => getComputedStyle(el).fontSize))];
    const fontWeights = [...new Set([...document.querySelectorAll('*')].slice(0, 500).map(el => getComputedStyle(el).fontWeight))];
    return {
      bodyStyles: {
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        color: cs.color,
        backgroundColor: cs.backgroundColor,
        lineHeight: cs.lineHeight,
      },
      colors: [...allColors].sort(),
      fontSizes: fontSizes.sort(),
      fontWeights: fontWeights.sort(),
    };
  });
  writeFileSync(join(TMP, 'everydaydose-styles.json'), JSON.stringify(styles, null, 2));
  console.log('Styles extracted');

  // Deep extraction: per-section DOM + styles
  const sectionCount = sections.length;
  console.log(`Extracting detailed styles for ${sectionCount} sections...`);

  for (let i = 0; i < Math.min(sectionCount, 30); i++) {
    const detail = await page.evaluate((idx) => {
      const allSections = [...document.querySelectorAll('section, [class*="section"], header, footer, nav, main')];
      if (allSections.length === 0) return null;
      const el = allSections[idx];
      if (!el) return null;

      const props = ['fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
        'textTransform','textDecoration','backgroundColor','background',
        'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',
        'margin','marginTop','marginRight','marginBottom','marginLeft',
        'width','height','maxWidth','minWidth','maxHeight','minHeight',
        'display','flexDirection','justifyContent','alignItems','gap',
        'gridTemplateColumns','gridTemplateRows',
        'borderRadius','border','boxShadow','overflow',
        'position','top','right','bottom','left','zIndex',
        'opacity','transform','transition','cursor','objectFit',
        'backgroundImage','backgroundSize','backgroundPosition'];

      function extractStyles(element) {
        const cs = getComputedStyle(element);
        const styles = {};
        props.forEach(p => {
          const v = cs[p];
          if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)' && v !== 'rgb(0, 0, 0)') {
            styles[p] = v;
          }
        });
        return styles;
      }

      function walk(element, depth) {
        if (depth > 5) return null;
        const children = [...element.children];
        return {
          tag: element.tagName.toLowerCase(),
          classes: element.className?.toString().substring(0, 150) || '',
          id: element.id || undefined,
          text: element.childNodes.length === 1 && element.childNodes[0].nodeType === 3
            ? element.textContent.trim().substring(0, 300) : undefined,
          styles: extractStyles(element),
          images: element.tagName === 'IMG' ? { src: element.src, alt: element.alt } : undefined,
          videos: element.tagName === 'VIDEO' ? { src: element.src || element.querySelector('source')?.src } : undefined,
          svg: element.tagName === 'SVG' ? { width: element.getAttribute('width'), height: element.getAttribute('height') } : undefined,
          childCount: children.length,
          children: children.slice(0, 25).map(c => walk(c, depth + 1)).filter(Boolean),
        };
      }
      return walk(el, 0);
    }, i);

    if (detail) {
      writeFileSync(join(TMP, `everydaydose-section-${i}.json`), JSON.stringify(detail, null, 2));
    }
  }
  console.log('Section details extracted');

  // Mobile screenshot (390px)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: join(OUT, 'everydaydose-mobile-full.png'), fullPage: true });
  console.log('Mobile screenshot saved');

  // Full rendered HTML
  const fullHTML = await page.evaluate(() => document.documentElement.outerHTML);
  writeFileSync(join(TMP, 'everydaydose-rendered.html'), fullHTML);
  console.log('Full rendered HTML saved, length:', fullHTML.length);

  await browser.close();
  console.log('Done!');
})();
