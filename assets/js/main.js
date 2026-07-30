document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () { mobileNav.classList.toggle('open'); });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
    });
  }
  var carousel = document.getElementById('heroCarousel');
  if (!carousel) return;
  var items = carousel.querySelectorAll('.hero-carousel-item');
  var idx = 0;
  setInterval(function () {
    idx = (idx + 1) % items.length;
    items.forEach(function (item, i) {
      item.classList.toggle('active', i === idx);
    });
  }, 5000);
});
