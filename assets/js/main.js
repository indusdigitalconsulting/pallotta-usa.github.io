/* Pallotta Pavers & Concrete — site interactions */
(function () {
  'use strict';

  /* ---- mobile nav ---- */
  var body = document.body;
  var toggle = document.querySelector('.nav-toggle');
  var scrim = document.querySelector('.nav-scrim');

  function closeNav() { body.classList.remove('nav-open'); if (toggle) toggle.setAttribute('aria-expanded', 'false'); }
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  if (scrim) scrim.addEventListener('click', closeNav);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeNav(); closeLightbox(); } });

  /* ---- dropdowns (mobile = click to expand) ---- */
  document.querySelectorAll('.has-drop > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width:1000px)').matches) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.parentElement;
      var ans = item.querySelector('.faq-a');
      var open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
      ans.style.maxHeight = open ? ans.scrollHeight + 'px' : null;
    });
  });

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- gallery lightbox ---- */
  var lb = document.querySelector('.lightbox');
  var lbImg = lb ? lb.querySelector('img') : null;
  var sources = [];
  var current = 0;

  function openLightbox(i) {
    if (!lb) return;
    current = i;
    lbImg.src = sources[current];
    lb.classList.add('open');
    body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove('open');
    body.style.overflow = '';
  }
  function step(d) {
    current = (current + d + sources.length) % sources.length;
    lbImg.src = sources[current];
  }
  document.querySelectorAll('.gallery-grid button').forEach(function (b, i) {
    sources.push(b.getAttribute('data-full') || b.querySelector('img').src);
    b.addEventListener('click', function () { openLightbox(i); });
  });
  if (lb) {
    lb.querySelector('.lb-close').addEventListener('click', closeLightbox);
    lb.querySelector('.lb-prev').addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
    lb.querySelector('.lb-next').addEventListener('click', function (e) { e.stopPropagation(); step(1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
  }

  /* ---- newsletter (front-end only) ---- */
  document.querySelectorAll('.news form').forEach(function (nf) {
    nf.addEventListener('submit', function (e) {
      e.preventDefault();
      var i = nf.querySelector('input');
      i.value = '';
      i.placeholder = 'Thanks — you are subscribed!';
    });
  });

  /* ---- year ---- */
  var y = document.querySelector('#year');
  if (y) y.textContent = new Date().getFullYear();
})();
