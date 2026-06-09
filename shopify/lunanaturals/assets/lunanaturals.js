/* =====================================================
   Luna Naturals / Gruns Theme — Shopify JS
   All vanilla JS, no frameworks.

   Powers interactive elements across all Luna sections:
     - Hero carousel + rotating word
     - Benefits scroll reveal
     - Product Buy Box (gallery, info tabs, bundles, subscribe toggle, countdown)
     - Reviews testimonial carousel
     - FAQ accordion
     - Live order toast
     - Sticky CTA
     - Lazy videos
   ===================================================== */

(function () {
  "use strict";

  /* -------------------------------------------------
     Utility helpers
     ------------------------------------------------- */
  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function $$(sel, root) {
    return Array.from((root || document).querySelectorAll(sel));
  }

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  /* =====================================================
     1. Hero Carousel + Rotating Word
     ===================================================== */
  function initHeroCarousel() {
    var carousel = $("[data-luna-hero-carousel]");
    if (!carousel) return;

    var section = carousel.closest("[data-section-type='luna-hero']") || carousel.closest("section");
    var slides = $$(".luna-hero__slide", carousel);
    var dots = $$(".luna-hero__dot", carousel);
    var wordEl = $("[data-luna-rotating-word]", section);
    var total = slides.length;
    if (total === 0) return;

    var activeIndex = 0;
    var autoplaySpeed = 5000;
    var wordSpeed = 5000;

    // Rotating words — default fallback
    var words = ["Adults", "Kids"];
    if (section) {
      var w1 = section.getAttribute("data-word-1");
      var w2 = section.getAttribute("data-word-2");
      if (w1 && w2) words = [w1, w2];
    }
    var wordIndex = 0;

    function goToSlide(index) {
      activeIndex = index;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("luna-hero__slide--active", i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("luna-hero__dot--active", i === index);
      });
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { goToSlide(i); });
    });

    if (total > 1) {
      setInterval(function () {
        goToSlide((activeIndex + 1) % total);
      }, autoplaySpeed);
    }

    if (wordEl && words.length > 1) {
      setInterval(function () {
        wordEl.classList.remove("luna-hero__rotating-word--visible");
        wordEl.classList.add("luna-hero__rotating-word--hidden");
        setTimeout(function () {
          wordIndex = (wordIndex + 1) % words.length;
          wordEl.textContent = words[wordIndex];
          wordEl.classList.remove("luna-hero__rotating-word--hidden");
          wordEl.classList.add("luna-hero__rotating-word--visible");
        }, 300);
      }, wordSpeed);
    }
  }

  /* =====================================================
     2. Benefits Scroll Reveal
     ===================================================== */
  function initScrollReveal() {
    var items = $$("[data-luna-scroll-reveal]");
    if (items.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("luna-benefits__statement--visible");
        el.classList.add("luna-benefits__image-wrap--visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("luna-benefits__statement--visible");
            entry.target.classList.add("luna-benefits__image-wrap--visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach(function (item) { observer.observe(item); });
  }

  /* =====================================================
     3. Product Buy Box (gallery, tabs, bundles, subscribe, countdown)
     ===================================================== */
  function initBuyBox() {
    var section = $("[data-section-type='luna-product-buy-box']");
    if (!section) return;

    /* ── Gallery ── */
    var gallery = $("[data-luna-bb-gallery]", section);
    if (gallery) {
      var images = $$(".luna-bb__main-image", gallery);
      var thumbs = $$("[data-bb-thumb]", gallery);
      var dots = $$("[data-bb-dot]", gallery);
      var prevBtn = $("[data-bb-prev]", gallery);
      var nextBtn = $("[data-bb-next]", gallery);
      var firstOnlyEls = $$("[data-bb-first-only]", gallery);
      var packOverlay = $("[data-bb-pack-overlay]", gallery);
      var baBefore = $("[data-bb-ba-before]", gallery);
      var baAfter = $("[data-bb-ba-after]", gallery);
      var galleryTotal = images.length;
      var galleryActive = 0;

      function showImage(index) {
        galleryActive = index;
        images.forEach(function (img, i) {
          if (i === index) {
            img.classList.remove("luna-bb__main-image--hidden");
          } else {
            img.classList.add("luna-bb__main-image--hidden");
          }
        });
        dots.forEach(function (d, i) {
          d.classList.toggle("luna-bb__dot--active", i === index);
        });
        thumbs.forEach(function (t, i) {
          t.classList.toggle("luna-bb__thumb--active", i === index);
        });

        // Feature tags only on first image
        firstOnlyEls.forEach(function (el) {
          el.style.display = index === 0 ? "" : "none";
        });

        // Overlays based on image src patterns
        var activeImg = images[index];
        var src = activeImg ? (activeImg.getAttribute("src") || "") : "";

        if (packOverlay) {
          packOverlay.classList.toggle("luna-bb__pack-overlay--visible", src.indexOf("3pack") > -1);
        }
        if (baBefore && baAfter) {
          var isBA = src.indexOf("before-after") > -1;
          baBefore.classList.toggle("luna-bb__ba-label--visible", isBA);
          baAfter.classList.toggle("luna-bb__ba-label--visible", isBA);
        }
      }

      thumbs.forEach(function (thumb) {
        thumb.addEventListener("click", function () {
          showImage(parseInt(thumb.getAttribute("data-bb-thumb"), 10));
        });
      });

      dots.forEach(function (dot) {
        dot.addEventListener("click", function () {
          showImage(parseInt(dot.getAttribute("data-bb-dot"), 10));
        });
      });

      if (prevBtn) {
        prevBtn.addEventListener("click", function () {
          showImage((galleryActive - 1 + galleryTotal) % galleryTotal);
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener("click", function () {
          showImage((galleryActive + 1) % galleryTotal);
        });
      }

      showImage(0);
    }

    /* ── Info Tabs ── */
    var tabBtns = $$("[data-bb-info-tab]", section);
    var tabPanels = $$("[data-bb-info-panel]", section);

    tabBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-bb-info-tab");
        tabBtns.forEach(function (b) {
          b.classList.toggle("luna-bb__info-tab-btn--active", b === btn);
        });
        tabPanels.forEach(function (p) {
          p.classList.toggle(
            "luna-bb__info-panel--active",
            p.getAttribute("data-bb-info-panel") === key
          );
        });
      });
    });

    /* ── Bundle Selector ── */
    var bundleCards = $$("[data-bb-bundle]", section);
    bundleCards.forEach(function (card) {
      card.addEventListener("click", function () {
        bundleCards.forEach(function (c) {
          c.classList.toggle("luna-bb__bundle-card--active", c === card);
        });
      });
    });

    /* ── Subscribe Toggle ── */
    var subToggle = $("[data-bb-subscribe-toggle]", section);
    var subWrap = $("[data-luna-bb-subscribe]", section);
    if (subToggle) {
      subToggle.addEventListener("click", function () {
        subToggle.classList.toggle("luna-bb__toggle--on");
        if (subWrap) {
          subWrap.classList.toggle("luna-bb__subscribe--active");
        }
      });
    }

    /* ── Countdown Timer ── */
    var countdownEl = $("[data-bb-countdown]", section);
    if (countdownEl) {
      var hrs = 5;
      var min = 11;
      var sec = 26;

      function tick() {
        sec--;
        if (sec < 0) { sec = 59; min--; }
        if (min < 0) { min = 59; hrs--; }
        if (hrs < 0) { hrs = 0; min = 0; sec = 0; }
        countdownEl.textContent = pad(hrs) + "h " + pad(min) + "m " + pad(sec) + "s";
      }

      setInterval(tick, 1000);
    }
  }

  /* =====================================================
     4. Countdown Timer (legacy — nav bar countdown)
     ===================================================== */
  function initCountdown() {
    var hrsEl = document.getElementById("luna-countdown-hrs");
    var minEl = document.getElementById("luna-countdown-min");
    var secEl = document.getElementById("luna-countdown-sec");
    var wrapper = document.getElementById("luna-countdown");

    if (!hrsEl || !minEl || !secEl) return;

    var hrs = 21;
    var min = 47;
    var sec = 59;

    function update() {
      sec -= 1;
      if (sec < 0) { sec = 59; min -= 1; }
      if (min < 0) { min = 59; hrs -= 1; }
      if (hrs < 0) { hrs = 0; min = 0; sec = 0; }

      hrsEl.textContent = pad(hrs);
      minEl.textContent = pad(min);
      secEl.textContent = pad(sec);
    }

    if (wrapper) wrapper.style.display = "flex";

    hrsEl.textContent = pad(hrs);
    minEl.textContent = pad(min);
    secEl.textContent = pad(sec);

    setInterval(update, 1000);
  }

  /* =====================================================
     5. Product Info Tabs (legacy data-luna-tabs)
     ===================================================== */
  function initTabs() {
    var containers = document.querySelectorAll("[data-luna-tabs]");

    containers.forEach(function (container) {
      var buttons = container.querySelectorAll("[data-luna-tab-btn]");
      var panels = container.querySelectorAll("[data-luna-tab-panel]");

      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var target = btn.getAttribute("data-luna-tab-btn");

          buttons.forEach(function (b) {
            b.classList.remove("luna-tabs__btn--active");
          });
          btn.classList.add("luna-tabs__btn--active");

          panels.forEach(function (p) {
            if (p.getAttribute("data-luna-tab-panel") === target) {
              p.classList.add("luna-tabs__panel--active");
            } else {
              p.classList.remove("luna-tabs__panel--active");
            }
          });
        });
      });
    });
  }

  /* =====================================================
     6. Subscribe Toggle (legacy)
     ===================================================== */
  function initSubscribeToggle() {
    var containers = document.querySelectorAll("[data-luna-subscribe]");

    containers.forEach(function (container) {
      var options = container.querySelectorAll("[data-luna-subscribe-option]");

      options.forEach(function (opt) {
        opt.addEventListener("click", function () {
          options.forEach(function (o) {
            o.classList.remove("luna-subscribe__option--active");
          });
          opt.classList.add("luna-subscribe__option--active");
        });
      });
    });
  }

  /* =====================================================
     7. Bundle Size Selection (legacy)
     ===================================================== */
  function initBundleSelection() {
    var containers = document.querySelectorAll("[data-luna-bundle]");

    containers.forEach(function (container) {
      var options = container.querySelectorAll("[data-luna-bundle-option]");

      options.forEach(function (opt) {
        opt.addEventListener("click", function () {
          options.forEach(function (o) {
            o.classList.remove("luna-bundle__option--active");
          });
          opt.classList.add("luna-bundle__option--active");
        });
      });
    });
  }

  /* =====================================================
     8. Image Gallery (legacy data-luna-gallery)
     ===================================================== */
  function initGallery() {
    var galleries = document.querySelectorAll("[data-luna-gallery]");

    galleries.forEach(function (gallery) {
      var mainImg = gallery.querySelector("[data-luna-gallery-main]");
      var thumbs = gallery.querySelectorAll("[data-luna-gallery-thumb]");
      var prevBtn = gallery.querySelector("[data-luna-gallery-prev]");
      var nextBtn = gallery.querySelector("[data-luna-gallery-next]");

      if (!mainImg || thumbs.length === 0) return;

      var images = [];
      thumbs.forEach(function (t) {
        images.push(t.getAttribute("data-luna-gallery-thumb"));
      });

      var currentIndex = 0;

      function showImage(index) {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        currentIndex = index;

        mainImg.setAttribute("src", images[currentIndex]);

        thumbs.forEach(function (t, i) {
          if (i === currentIndex) {
            t.classList.add("luna-gallery__thumb--active");
          } else {
            t.classList.remove("luna-gallery__thumb--active");
          }
        });
      }

      thumbs.forEach(function (t, i) {
        t.addEventListener("click", function () { showImage(i); });
      });

      if (prevBtn) {
        prevBtn.addEventListener("click", function () { showImage(currentIndex - 1); });
      }
      if (nextBtn) {
        nextBtn.addEventListener("click", function () { showImage(currentIndex + 1); });
      }

      showImage(0);
    });
  }

  /* =====================================================
     9. FAQ Accordion
     ===================================================== */
  function initFaqAccordion() {
    var items = document.querySelectorAll("[data-luna-faq-item]");

    items.forEach(function (item) {
      // Support both new (data-luna-faq-trigger) and legacy (data-luna-faq-question) attributes
      var question = item.querySelector("[data-luna-faq-trigger]") || item.querySelector("[data-luna-faq-question]");

      if (!question) return;

      question.addEventListener("click", function () {
        var isOpen = item.classList.contains("luna-faq__item--open");

        // Close all others (single-open accordion)
        items.forEach(function (other) {
          other.classList.remove("luna-faq__item--open");
          var otherTrigger = other.querySelector("[data-luna-faq-trigger]") || other.querySelector("[data-luna-faq-question]");
          if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add("luna-faq__item--open");
          question.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* =====================================================
     10. Testimonial Carousel — Reviews section (circular)
     ===================================================== */
  function initTestimonialCarousel() {
    // New circular testimonials
    var wrap = $("[data-luna-testimonials]");
    if (wrap) {
      var avatars = $$(".luna-reviews__avatar", wrap);
      var slides = $$("[data-testimonial-slide]", wrap);
      var prevBtn = $("[data-testimonial-prev]", wrap);
      var nextBtn = $("[data-testimonial-next]", wrap);
      var total = slides.length;

      if (total > 0) {
        var current = 0;
        var autoplayInterval = null;

        function show(index) {
          current = ((index % total) + total) % total;
          avatars.forEach(function (a, i) {
            a.classList.toggle("luna-reviews__avatar--active", i === current);
          });
          slides.forEach(function (s, i) {
            s.style.display = i === current ? "" : "none";
          });
        }

        function startAutoplay() {
          stopAutoplay();
          autoplayInterval = setInterval(function () { show(current + 1); }, 6000);
        }

        function stopAutoplay() {
          if (autoplayInterval) clearInterval(autoplayInterval);
        }

        if (prevBtn) {
          prevBtn.addEventListener("click", function () { show(current - 1); startAutoplay(); });
        }
        if (nextBtn) {
          nextBtn.addEventListener("click", function () { show(current + 1); startAutoplay(); });
        }

        show(0);
        startAutoplay();
      }
    }

    // Legacy card-based testimonial carousel
    var carousels = document.querySelectorAll("[data-luna-testimonial-carousel]");

    carousels.forEach(function (carousel) {
      var track = carousel.querySelector("[data-luna-testimonial-track]");
      var dots = carousel.querySelectorAll("[data-luna-testimonial-dot]");
      var slides = carousel.querySelectorAll("[data-luna-testimonial-slide]");

      if (!track || slides.length === 0) return;

      var currentIndex = 0;
      var slideCount = slides.length;
      var autoplayInterval = null;

      function getVisibleCount() {
        var width = window.innerWidth;
        if (width >= 1024) return 3;
        if (width >= 768) return 2;
        return 1;
      }

      function getMaxIndex() {
        return Math.max(0, slideCount - getVisibleCount());
      }

      function goTo(index) {
        var maxIdx = getMaxIndex();
        if (index > maxIdx) index = 0;
        if (index < 0) index = maxIdx;
        currentIndex = index;

        var pct = (100 / slideCount) * currentIndex;
        track.style.transform = "translateX(-" + pct + "%)";

        dots.forEach(function (dot, i) {
          dot.classList.toggle("luna-testimonials__dot--active", i === currentIndex);
        });
      }

      function next() { goTo(currentIndex + 1); }

      dots.forEach(function (dot, i) {
        dot.addEventListener("click", function () {
          goTo(i);
          resetAutoplay();
        });
      });

      function startAutoplay() {
        autoplayInterval = setInterval(next, 5000);
      }

      function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
      }

      window.addEventListener("resize", function () {
        goTo(Math.min(currentIndex, getMaxIndex()));
      });

      goTo(0);
      startAutoplay();
    });
  }

  /* =====================================================
     11. Live Order Toast
     ===================================================== */
  function initLiveOrderToast() {
    var toastEl = document.getElementById("luna-live-order-toast");
    if (!toastEl) return;

    var nameEl = toastEl.querySelector("[data-toast-name]");
    var cityEl = toastEl.querySelector("[data-toast-city]");
    var productEl = toastEl.querySelector("[data-toast-product]");
    var timeEl = toastEl.querySelector("[data-toast-time]");
    var imageEl = toastEl.querySelector("[data-toast-image]");

    var names = [
      "Sarah M.", "Emily R.", "Jess K.", "Ashley T.", "Amanda P.", "Mike D.", "David L.", "Chris B.",
      "Jen W.", "Lisa R.", "Rebecca D.", "Michelle H.", "Nicole S.", "Steph C.", "Rachel G.",
      "Dan F.", "Matt J.", "Andrew N.", "James W.", "Rob T.", "Lauren K.", "Megan A.", "Britt V.",
      "Sam Q.", "Christina E.", "Kevin M.", "Brian D.", "Jason R.", "Tyler B.", "Brandon S."
    ];

    var cities = [
      "Austin, TX", "Portland, OR", "Nashville, TN", "Denver, CO", "San Diego, CA",
      "Charlotte, NC", "Seattle, WA", "Phoenix, AZ", "Tampa, FL", "Raleigh, NC",
      "Minneapolis, MN", "Atlanta, GA", "Chicago, IL", "Miami, FL", "Dallas, TX",
      "Boston, MA", "Brooklyn, NY", "Sacramento, CA", "Orlando, FL", "Columbus, OH"
    ];

    var products = [
      { name: "1-pack", image: "product-kids-patches-v2.jpg" },
      { name: "1-pack", image: "adults-pack-moss.jpg" },
      { name: "2-pack", image: "product-kids-patches-v2.jpg" },
      { name: "2-pack", image: "adults-pack-moss.jpg" },
      { name: "3-pack", image: "kids-3pack-forest.jpg" },
      { name: "4-pack", image: "product-kids-patches-v2.jpg" }
    ];

    var timeAgo = [
      "just now", "2 min ago", "5 min ago", "11 min ago", "18 min ago",
      "24 min ago", "33 min ago", "41 min ago", "57 min ago"
    ];

    function randomFrom(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function showToast() {
      var name = randomFrom(names);
      var city = randomFrom(cities);
      var product = randomFrom(products);
      var time = randomFrom(timeAgo);

      if (nameEl) nameEl.textContent = name;
      if (cityEl) cityEl.textContent = city;
      if (productEl) productEl.textContent = product.name;
      if (timeEl) timeEl.textContent = time;
      if (imageEl) imageEl.setAttribute("src", product.image);

      toastEl.classList.add("luna-toast--visible");

      setTimeout(function () {
        toastEl.classList.remove("luna-toast--visible");
      }, 4000);
    }

    setTimeout(showToast, 5000);
    setInterval(showToast, 10000);
  }

  /* =====================================================
     12. Sticky CTA Show/Hide on Scroll
     ===================================================== */
  function initStickyCTA() {
    var cta = document.getElementById("luna-sticky-cta");
    if (!cta) return;

    var threshold = 600;

    function onScroll() {
      if (window.scrollY > threshold) {
        cta.classList.add("luna-sticky-cta--visible");
      } else {
        cta.classList.remove("luna-sticky-cta--visible");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* =====================================================
     13. Review Category Tabs (legacy)
     ===================================================== */
  function initReviewTabs() {
    var containers = document.querySelectorAll("[data-luna-review-tabs]");

    containers.forEach(function (container) {
      var buttons = container.querySelectorAll("[data-luna-review-tab-btn]");
      var panels = container.querySelectorAll("[data-luna-review-tab-panel]");

      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var target = btn.getAttribute("data-luna-review-tab-btn");

          buttons.forEach(function (b) {
            b.classList.remove("luna-review-tabs__btn--active");
          });
          btn.classList.add("luna-review-tabs__btn--active");

          panels.forEach(function (p) {
            if (p.getAttribute("data-luna-review-tab-panel") === target) {
              p.style.display = "block";
            } else {
              p.style.display = "none";
            }
          });
        });
      });
    });
  }

  /* =====================================================
     14. Lazy Video Autoplay (IntersectionObserver)
     ===================================================== */
  function initLazyVideos() {
    var videos = $$("[data-luna-lazy-video]");
    if (videos.length === 0 || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.play().catch(function () {});
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    videos.forEach(function (vid) { observer.observe(vid); });
  }

  /* =====================================================
     Initialize all on DOMContentLoaded
     ===================================================== */
  function init() {
    initHeroCarousel();
    initScrollReveal();
    initBuyBox();
    initCountdown();
    initTabs();
    initSubscribeToggle();
    initBundleSelection();
    initGallery();
    initFaqAccordion();
    initTestimonialCarousel();
    initLiveOrderToast();
    initStickyCTA();
    initReviewTabs();
    initLazyVideos();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
