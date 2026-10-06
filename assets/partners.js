// Partnerek: logo = kép útvonala (pl. 'images/partner-ceg.png'), url = a partner honlapja (üresen hagyva nem kattintható).
window.PARTNERS = [
  { name: 'PCP – Pro Construction Project', logo: 'images/partner-pcp.png', url: '' }
];
document.addEventListener('DOMContentLoaded', function () {
  var box = document.getElementById('partners-container');
  if (!box) return;
  PARTNERS.forEach(function (p) {
    var a = document.createElement(p.url ? 'a' : 'div');
    a.className = 'partner-card';
    if (p.url) {
      a.href = p.url;
      a.target = '_blank';
      a.rel = 'noopener';
    }
    a.title = p.name;
    a.innerHTML = p.logo ? '<img src="' + p.logo + '" alt="' + p.name + ' logó">' : '<span>' + p.name + '</span>';
    box.appendChild(a);
  });
});
