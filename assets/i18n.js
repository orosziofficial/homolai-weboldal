(function () {
  var D = {
    nav_refs: { hu: 'REFERENCIÁK', en: 'REFERENCES' },
    nav_contact: { hu: 'KAPCSOLAT', en: 'CONTACT' },
    hero1: { hu: 'SZAKÉRTELEM', en: 'EXPERTISE' },
    hero2: { hu: 'BIZTONSÁG', en: 'SAFETY' },
    hero3: { hu: 'JÖVŐ', en: 'FUTURE' },
    hero_sub: { hu: 'HOMOLAI MÉRNÖKIRODA', en: 'HOMOLAI ENGINEERING OFFICE' },
    about: {
      hu: 'Emberközpontú, átgondolt és időtálló műszaki megoldásokon dolgozunk.<br>Hiszünk abban, hogy a sikeres beruházások alapja a magas színvonalú mérnöki munka,<br>a műszaki ellenőrzés és a szakszerű projektlebonyolítás.',
      en: 'We work on people-centred, well-considered and lasting technical solutions.<br>We believe that successful investments are built on high-quality engineering,<br>technical supervision and professional project delivery.'
    },
    svc_inspection_t: { hu: 'Műszaki ellenőrzés', en: 'Technical supervision' },
    svc_inspection_d: {
      hu: 'A műszaki ellenőr az építtető (megrendelő) megbízásából végzett független szakmai tevékenység, amely a kivitelezési munkák teljes folyamatát felügyeli.',
      en: 'The technical supervisor carries out independent professional work on behalf of the client, overseeing the entire construction process.'
    },
    svc_pm_t: { hu: 'Projektmenedzsment', en: 'Project management' },
    svc_pm_d: {
      hu: 'A projektmenedzsment célja az erőforrások hatékony koordinálása, a kockázatok kezelése, valamint annak biztosítása, hogy a projekt a meghatározott határidőn, költségvetésen és minőségi elvárásokon belül valósuljon.',
      en: 'Project management aims to coordinate resources efficiently, manage risks and ensure that the project is delivered within the agreed deadline, budget and quality requirements.'
    },
    svc_consulting_t: { hu: 'Műszaki tanácsadás', en: 'Technical consulting' },
    svc_consulting_d: {
      hu: 'A műszaki tanácsadás olyan magas szintű szakmai, tudományos és mérnöki ismereteket igénylő szolgáltatás, amely támogatja a különféle kihívások hatékony megoldását.',
      en: 'Technical consulting is a service requiring advanced professional, scientific and engineering knowledge, supporting the effective solution of a wide range of challenges.'
    },
    svc_assess_t: { hu: 'Ingatlan állapotfelmérés', en: 'Property condition survey' },
    svc_assess_d: {
      hu: 'Az ingatlan állapotfelmérés során átfogó képet adok az épület műszaki állapotáról, feltárva az esetleges hibákat, hiányosságokat és várható kockázatokat. A felmérés segít megalapozott döntést hozni vásárlás, eladás vagy felújítás előtt.',
      en: 'A property condition survey gives a comprehensive picture of the technical state of the building, revealing possible defects, deficiencies and expected risks. It helps you make a well-founded decision before buying, selling or renovating.'
    },
    modal_title: { hu: 'Szolgáltatás', en: 'Service' },
    modal_close: { hu: 'Bezárás', en: 'Close' },
    partners_title: { hu: 'Partnereink', en: 'Our partners' },
    partners_sub: { hu: 'Megbízható szakmai partnereink, akikkel együtt dolgozunk.', en: 'Trusted professional partners we work with.' },
    contact_title: { hu: 'Vedd fel velünk a kapcsolatot', en: 'Get in touch with us' },
    contact_text: {
      hu: 'Minden igény egyedi, ahogy minden épület is az. Nálunk nincs sablon megoldás, csak olyan szolgáltatás,<br>ami ügyfeleink egyedi igényeihez igazodik.',
      en: 'Every need is unique, just like every building. We have no template solutions, only a service<br>tailored to the individual needs of our clients.'
    },
    f_email: { hu: 'Email cím', en: 'Email address' },
    f_name: { hu: 'Név', en: 'Name' },
    f_msg: { hu: 'Üzenet', en: 'Message' },
    f_email_ph: { hu: 'Email cím megadása', en: 'Enter your email address' },
    f_name_ph: { hu: 'Teljes név megadása', en: 'Enter your full name' },
    f_msg_ph: { hu: 'Üzenet megadása', en: 'Enter your message' },
    f_send: { hu: 'ELKÜLDÉS', en: 'SEND' },
    form_fill: { hu: 'Kérjük, töltse ki az összes mezőt!', en: 'Please fill in all fields!' },
    form_ok: { hu: 'Köszönjük az üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.', en: 'Thank you for your message! We will contact you shortly.' },
    footer_rights: { hu: 'Minden jog fenntartva!<br>Impresszum', en: 'All rights reserved!<br>Legal notice' },
    refs_title: { hu: 'REFERENCIÁK', en: 'REFERENCES' },
    refs_sub: { hu: 'A KIFOGÁSTALAN KIVITELEZÉS OTT KEZDŐDIK,<br>AHOL A KOMPROMISSZUM VÉGET ÉR!', en: 'FLAWLESS CONSTRUCTION STARTS<br>WHERE COMPROMISE ENDS!' },
    r_place: { hu: 'Helyszín', en: 'Location' },
    r_type: { hu: 'Típus', en: 'Type' },
    r_size: { hu: 'Méret', en: 'Size' },
    r_service: { hu: 'Szolgáltatás', en: 'Service' },
    r_residential: { hu: 'Lakóingatlan', en: 'Residential property' },
    r_supervision: { hu: 'Műszaki ellenőrzés', en: 'Technical supervision' },
    r_delivery: { hu: 'Beruházás lebonyolítás', en: 'Investment management' },
    r1: { hu: 'Családi ház', en: 'Family house' },
    r2: { hu: 'Családiház', en: 'Family house' },
    r3: { hu: 'Kétlakásos családi ház', en: 'Two-unit family house' },
    r4: { hu: 'Kétlakásos családiház', en: 'Two-unit family house' },
    r5: { hu: 'Kétlakásos nyaraló', en: 'Two-unit holiday home' },
    r6: { hu: 'Lakás felújítás', en: 'Apartment renovation' },
    c_title: { hu: 'KAPCSOLAT', en: 'CONTACT' },
    c_sub: { hu: 'RÓLUNK', en: 'ABOUT US' },
    c_p1: { hu: 'Homolai Máté vagyok, építészmérnök- és szerkezetépítő mérnök, több mint 10 év építőipari tapasztalattal.', en: 'I am Máté Homolai, an architectural and structural engineer with more than 10 years of experience in the construction industry.' },
    c_p2: { hu: 'Pályafutásomat tudatos szakmai építkezés jellemzi: a kivitelezés gyakorlati oldaláról indulva az építőipar számos területén szereztem tapasztalatot, így átfogó rálátással rendelkezem az építési folyamatok teljes életciklusára. Műszaki ellenőrként és építési projektmenedzserként, komplex beruházások előkészítéséért, koordinációjáért és sikeres megvalósításáért felelek.', en: 'My career has been built deliberately: starting from the practical side of construction, I gained experience in many areas of the industry, so I have a comprehensive view of the entire life cycle of building processes. As a technical supervisor and construction project manager, I am responsible for the preparation, coordination and successful delivery of complex investments.' },
    c_p3: { hu: 'Tanulmányaimat építészmérnöki BSc diplomával kezdtem, majd szerkezetépítő mérnöki MSc oklevelet szereztem. Szakmai pályafutásom során családi házak, társasházak, műemléki épületek, irodaépületek, valamint gyártó- és logisztikai csarnokok és éttermek, kivitelezésében és projektirányításában vettem részt.', en: 'I started my studies with a BSc in architectural engineering, then earned an MSc in structural engineering. During my career I have taken part in the construction and project management of family houses, condominiums, heritage buildings, office buildings, manufacturing and logistics halls, and restaurants.' },
    c_p4: { hu: 'A nagy volumenű projektek során megszerzett tudás és gyakorlati tapasztalat biztos alapot nyújt ahhoz, hogy megrendelőimet szakmailag hitelesen és felelősségteljesen képviseljem. Tevékenységem kiterjed lakó-, kereskedelmi-, vendéglátóipari és ipari rendeltetésű épületek, valamint egyéb építési beruházások műszaki támogatására, projektmenedzsmentjére és szakmai képviseletére. Célom, hogy ügyfeleim számára a projekt teljes időtartama alatt átlátható folyamatokat, gazdaságos és műszakilag megalapozott megoldásokat, valamint magas színvonalú műszaki kontrollt biztosítsak. A nagyberuházások koordinálása során megtanultam, hogy a siker nem csupán a projekt egészének megfelelő irányításán múlik, hanem a legapróbb részletek precíz kezelésén is, ezért a tervezéstől a megvalósításig kiemelt figyelmet fordítok arra, hogy minden műszaki és minőségi szempont a helyén legyen.', en: 'The knowledge and practical experience gained on large-scale projects give me a solid basis to represent my clients credibly and responsibly. My work covers the technical support, project management and professional representation of residential, commercial, hospitality and industrial buildings and other construction investments. My aim is to provide my clients with transparent processes, economical and technically sound solutions, and high-quality technical control throughout the project. Coordinating major investments taught me that success depends not only on managing the project as a whole but also on handling the smallest details precisely, so from design to completion I pay special attention to getting every technical and quality aspect right.' },
    c_p5: { hu: 'A biztos műszaki háttér és szakmai tudás mellett egy olyan, több szakterületet felölelő, tapasztalt szakemberekből álló csapat támogatja munkámat, amely az építőiparban felmerülő valamennyi kihívást magabiztosan, magas szakmai színvonalon és naprakész tudással kezeli. Legyen szó bármely szakági feladatról – szerkezetépítésről, épületgépészetről, villamos rendszerekről vagy egyéb műszaki területekről –, ügyfeleim minden esetben összehangolt, megbízható és professzionális szakmai támogatásra számíthatnak.', en: 'Besides a solid technical background, my work is supported by a multidisciplinary team of experienced professionals who handle every challenge in the construction industry with confidence, at a high professional standard and with up-to-date knowledge. Whatever the discipline – structural engineering, building services, electrical systems or other technical fields – my clients can count on coordinated, reliable and professional support.' },
    c_p6: { hu: 'Hiszem, hogy egy sikeres építési projekt alapja a megfelelő szakmai felkészültség, a precíz tervezés, a részletekre való odafigyelés és a megbízható együttműködés.', en: 'I believe that a successful construction project is built on proper professional preparation, precise planning, attention to detail and reliable cooperation.' },
    c_info: { hu: 'Elérhetőség', en: 'Contact details' },
    c_info_sub: { hu: 'Keress bizalommal!', en: 'Feel free to get in touch!' },
    c_form_title: { hu: 'Küldj közvetlenül üzenetet', en: 'Send a message directly' }
  };

  var lang = 'hu';
  try { var s = localStorage.getItem('lang'); if (s) lang = s; } catch (e) {}

  window.tr = function (k) { return D[k] ? D[k][lang] : k; };
  window.getLang = function () { return lang; };

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.innerHTML = tr(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.setAttribute('placeholder', tr(el.getAttribute('data-i18n-ph'))); });
    document.querySelectorAll('.lang-btn').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-lang') === lang); });
    document.dispatchEvent(new Event('langchange'));
  }
  window.setLang = function (l) {
    lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    apply();
  };

  document.addEventListener('click', function (e) {
    var b = e.target.closest('.lang-btn');
    if (b) { e.preventDefault(); setLang(b.getAttribute('data-lang')); }
  });
  document.addEventListener('DOMContentLoaded', apply);
})();
