import { chromium } from 'playwright';
import { join } from 'path';

const OUT = '/Users/brainor/my-clone/docs/design-references';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Loading local page...');
  await page.goto('http://localhost:3000/everydaydose', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);

  await page.screenshot({ path: join(OUT, 'everydaydose-clone-desktop.png'), fullPage: true });
  console.log('Desktop screenshot saved');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: join(OUT, 'everydaydose-clone-mobile.png'), fullPage: true });
  console.log('Mobile screenshot saved');

  await browser.close();
  console.log('Done!');
})();
