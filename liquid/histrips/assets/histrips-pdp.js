// HiStrips PDP — Interactive JS

document.addEventListener('DOMContentLoaded', function () {

  // ── Header scroll shadow ────────────────────────────────
  const header = document.querySelector('.hs-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 0);
    }, { passive: true });
  }

  // ── Image gallery ───────────────────────────────────────
  const mainImg = document.querySelector('.hs-gallery-main img');
  const thumbs = document.querySelectorAll('.hs-thumb');
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      if (mainImg) mainImg.src = thumb.querySelector('img').src;
    });
  });

  // ── Quantity selector ───────────────────────────────────
  const qtyBtns = document.querySelectorAll('.hs-qty-btn');
  qtyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      qtyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // ── Purchase toggle (one-time / subscribe) ──────────────
  const toggleBtns = document.querySelectorAll('.hs-toggle-btn');
  const subscribeInfo = document.querySelector('.hs-subscribe-info');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (subscribeInfo) {
        subscribeInfo.style.display = btn.dataset.value === 'subscribe' ? 'block' : 'none';
      }
    });
  });

  // ── Product accordion ───────────────────────────────────
  const accItems = document.querySelectorAll('.hs-acc-item');
  accItems.forEach(item => {
    const toggle = item.querySelector('.hs-acc-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        accItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    }
  });

  // ── FAQ accordion ───────────────────────────────────────
  const faqItems = document.querySelectorAll('.hs-faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.hs-faq-q');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    }
  });

  // ── Newsletter form (no-op demo) ────────────────────────
  const nlForm = document.querySelector('.hs-nl-form');
  if (nlForm) {
    nlForm.addEventListener('submit', e => { e.preventDefault(); });
  }

});
