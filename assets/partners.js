// Partnerek: ide kell felvenni a 2-4 partnert. logo = kép útvonala (pl. 'images/partners/ceg.png'), url = a partner honlapja.
window.PARTNERS = [
  { name: 'Partner 1', logo: '', url: '#' },
  { name: 'Partner 2', logo: '', url: '#' },
  { name: 'Partner 3', logo: '', url: '#' }
];
document.addEventListener('DOMContentLoaded', function () {
  var box = document.getElementById('partners-container');
  if (!box) return;
  PARTNERS.forEach(function (p) {
    var a = document.createElement('a');
    a.className = 'partner-card';
    a.href = p.url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.title = p.name;
    a.innerHTML = p.logo ? '<img src="' + p.logo + '" alt="' + p.name + '">' : '<span>' + p.name + '</span>';
    box.appendChild(a);
  });
});
