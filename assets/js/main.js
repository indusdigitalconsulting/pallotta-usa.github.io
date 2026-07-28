document.addEventListener('DOMContentLoaded', function () {
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
