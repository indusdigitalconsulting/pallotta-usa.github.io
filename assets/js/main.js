document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () { mobileNav.classList.toggle('open'); });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
    });
  }

  var mapEl = document.getElementById('serviceMap');
  if (mapEl && window.L) {
    var areas = [
      { n: 'Pasco County', lat: 28.3232, lng: -82.4319, r: 26000, d: 'left', o: [-10, -14] },
      { n: 'Northern Hillsborough County', lat: 28.0800, lng: -82.4000, r: 16000, d: 'bottom', o: [0, 4] },
      { n: 'San Antonio', lat: 28.3358, lng: -82.2751, r: 5000, d: 'right', o: [8, -12] },
      { n: 'Zephyrhills', lat: 28.2336, lng: -82.1812, r: 8000, d: 'right', o: [8, -12] },
      { n: 'Dade City', lat: 28.3647, lng: -82.1959, r: 7000, d: 'top', o: [0, -28] },
      { n: "Land O' Lakes", lat: 28.2189, lng: -82.4590, r: 9000, d: 'right', o: [10, -12] },
      { n: 'Wesley Chapel', lat: 28.2397, lng: -82.3279, r: 9000, d: 'top', o: [0, -28] },
      { n: 'Spring Hill', lat: 28.4769, lng: -82.5254, r: 11000, d: 'left', o: [-10, -12] },
      { n: 'Brooksville', lat: 28.5553, lng: -82.3879, r: 8000, d: 'right', o: [8, -12] },
      { n: 'Lutz', lat: 28.1511, lng: -82.4615, r: 7000, d: 'bottom', o: [0, 4] },
      { n: 'Odessa', lat: 28.1928, lng: -82.5915, r: 7000, d: 'left', o: [-10, -12] }
    ];
    var map = L.map('serviceMap', { scrollWheelZoom: false }).setView([28.33, -82.40], 9);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors', maxZoom: 18
    }).addTo(map);
    var pin = L.divIcon({
      className: '',
      html: '<svg width="26" height="26" viewBox="0 0 24 24" fill="#3949ab" stroke="#ffffff" stroke-width="1.5"><path d="M12 22s7-6.2 7-11.3A7 7 0 0 0 5 10.7C5 15.8 12 22 12 22z"/><circle cx="12" cy="10.5" r="2.6" fill="#ffffff" stroke="none"/></svg>',
      iconSize: [26, 26], iconAnchor: [13, 26]
    });
    var group = [];
    areas.forEach(function (a) {
      var m = L.marker([a.lat, a.lng], { icon: pin }).addTo(map)
        .bindTooltip(a.n, { permanent: true, direction: a.d, offset: a.o, className: 'area-label' });
      group.push(m);
    });
    map.fitBounds(L.featureGroup(group).getBounds(), { padding: [24, 24] });
    setTimeout(function () {
      map.invalidateSize();
      map.fitBounds(L.featureGroup(group).getBounds(), { padding: [24, 24] });
    }, 300);
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
