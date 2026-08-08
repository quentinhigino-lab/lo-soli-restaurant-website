(() => {
  /* ─── Data ─────────────────────────────────────────── */
  const MENU_DATA = [
    { tFr: 'Entrées', tEn: 'Starters', nFr: '', nEn: '', items: [
      { name: 'Planche mixte Lo Soli', fr: 'Charcuteries, fromages affinés, cornichons et pain grillé.', en: 'Cured meats, aged cheeses, pickles and toasted bread.', p: 16 },
      { name: 'Salade Lo Soli', fr: 'Jambon cru, chèvre chaud, œuf, tomates, mesclun.', en: 'Cured ham, warm goat cheese, egg, tomatoes, mixed leaves.', p: 15 },
      { name: 'Tataki de thon', fr: 'Thon mi-cuit, sésame, endives et vinaigrette soja.', en: 'Seared tuna, sesame, endives and soy dressing.', p: 16 },
      { name: 'Soupe de poissons maison', fr: 'Rouille, croûtons et fromage râpé.', en: 'Home-made fish soup, rouille and croutons.', p: 11 },
    ]},
    { tFr: 'De la mer', tEn: 'From the sea', nFr: 'Poissons & fruits de mer', nEn: 'Fish & seafood', items: [
      { name: 'Parillada de poissons', fr: 'Notre signature : poissons grillés, gambas et moules.', en: 'Our signature: grilled fish, king prawns and mussels.', p: 27, star: true },
      { name: 'Bouillabaisse maison', fr: 'La tradition, servie avec sa rouille.', en: 'The tradition, served with its rouille.', p: 26 },
      { name: 'Saint-Jacques sauce armoricaine', fr: 'Noix de Saint-Jacques poêlées.', en: 'Pan-seared scallops, armoricaine sauce.', p: 24 },
      { name: 'Moules-frites', fr: 'Marinière ou à la crème, frites maison.', en: 'Marinière or cream, home-made fries.', p: 17 },
      { name: 'Homard grillé', fr: 'Sur commande la veille.', en: 'To order, one day ahead.', market: true },
    ]},
    { tFr: 'Les grillades', tEn: 'From the grill', nFr: 'Viandes maison', nEn: 'House meats', items: [
      { name: 'Entrecôte maison', fr: "Beurre maître d'hôtel, frites maison.", en: "Maître d'hôtel butter, home-made fries.", p: 24, star: true },
      { name: "Souris d'agneau confite", fr: 'Jus au thym, écrasé de pommes de terre.', en: 'Thyme jus, crushed potatoes.', p: 22 },
      { name: 'Burger Lo Soli', fr: 'Bœuf, cheddar, oignons confits, frites maison.', en: 'Beef, cheddar, onion confit, home-made fries.', p: 17 },
      { name: 'Wok bœuf ou poulet', fr: 'Légumes croquants, sauce soja.', en: 'Crunchy vegetables, soy sauce.', p: 16 },
    ]},
    { tFr: 'Pizzas & pâtes', tEn: 'Pizza & pasta', nFr: 'Pâte fine', nEn: 'Thin crust', items: [
      { name: 'Pizza raclette', fr: 'Pommes de terre, raclette, charcuterie.', en: 'Potatoes, raclette cheese, cured meats.', p: 15 },
      { name: 'Pizza Saint-Jacques & fruits de mer', fr: 'Fruits de mer, Saint-Jacques, crème.', en: 'Seafood, scallops, cream.', p: 17 },
      { name: 'Pizza Reine', fr: 'Jambon, champignons, mozzarella.', en: 'Ham, mushrooms, mozzarella.', p: 13 },
      { name: 'Pâtes fraîches aux gambas', fr: 'Gambas, tomates, basilic.', en: 'King prawns, tomato, basil.', p: 18 },
    ]},
    { tFr: 'Desserts', tEn: 'Desserts', nFr: 'Maison', nEn: 'Home-made', items: [
      { name: 'Kouign-amann', fr: 'Tiède, glace pomme.', en: 'Warm, apple ice cream.', p: 9 },
      { name: 'Crêpe caramel beurre salé', fr: 'Ou chocolat maison.', en: 'Or home-made chocolate.', p: 7 },
      { name: 'Café / thé gourmand', fr: 'Assortiment de mignardises.', en: 'Selection of sweet treats.', p: 8 },
      { name: 'Dessert du jour', fr: "Selon l'inspiration.", en: "Chef's daily inspiration.", p: 7 },
    ]},
  ];

  const T = {
    fr: {
      reserve: 'Réserver',
      nav_accueil: 'Accueil', nav_carte: 'La Carte', nav_resto: 'Le Restaurant',
      nav_galerie: 'Galerie', nav_contact: 'Contact',
      hero_kicker: 'Bistrot de bord de mer · Perros-Guirec',
      hero_tag: 'Les pieds dans le sable, face à la plage de Trestraou.',
      cta_menu: 'Découvrir la carte',
      intro_k: 'Bienvenue',
      intro_t: 'Un bistrot chaleureux, les yeux dans la mer',
      intro_p1: "Installé en front de mer sur la plage de Trestraou, Lo Soli mêle la générosité d'une brasserie et la douceur d'un déjeuner face à l'eau. Bois chaud, banquettes confortables et vieilles photos de Perros-Guirec : on s'y sent bien, du café du matin au dernier verre du soir.",
      intro_p2: "Produits frais, poissons de la criée, viandes maison et pizzas à pâte fine — une cuisine simple et sincère qui suit les saisons.",
      tables_k: 'Nos espaces', tables_t: 'Où que vous vous installiez, la mer est là',
      sig_k: 'À la carte', sig_t: 'Les incontournables',
      sig_p: 'Quelques plats qui reviennent à chaque table.', sig_cta: 'Voir toute la carte',
      hours_k: 'Horaires & services', hours_t: 'Trois rendez-vous chaque jour',
      h_break_t: 'Petit-déjeuner', h_break_v: '9h – 11h',
      h_lunch_t: 'Déjeuner', h_lunch_v: '12h – 14h',
      h_dinner_t: 'Dîner', h_dinner_v: '19h · 21h',
      hours_note: 'Réservation conseillée, par téléphone — surtout en saison.',
      band_cta: 'Réserver au 02 96 91 14 69',
      insta_k: '@restaurant_lo_soli_22', insta_t: 'Suivez la vie du Soli',
      insta_p: "Les plats du jour, les couchers de soleil sur Trestraou et l'ambiance en salle.",
      insta_cta: 'Nous suivre sur Instagram',
      carte_k: 'La carte', carte_t: 'Notre carte',
      carte_p: "Une cuisine de brasserie généreuse : poissons et fruits de mer de la criée, viandes maison, pizzas à pâte fine et desserts maison. La carte évolue au fil des saisons et des arrivages.",
      formule: 'Formule petit-déjeuner · 9h–11h · 10 €',
      carte_note: 'Plats savoyards en hiver · Homard sur commande la veille',
      carte_disclaimer: 'Carte donnée à titre indicatif. La carte définitive et ses prix seront mis en ligne prochainement.',
      carte_cta_t: 'Une table vous attend', price_market: 'Prix du marché',
      resto_k: 'Notre histoire', resto_t: 'Du Ker Bleu à Lo Soli',
      resto_lead: "Une adresse de la plage de Trestraou, réinventée dans un esprit moderne et chaleureux — sans rien perdre de son âme.",
      resto_p1: "Lo Soli a pris place dans les murs de l'ancien Ker Bleu, une institution du front de mer. Après trois mois de travaux, le lieu a été entièrement repensé pour marier le confort d'un bistrot et la lumière d'une salle ouverte sur l'océan.",
      resto_p2: 'Bois clair, banquettes confortables et vieilles photographies de Perros-Guirec : un clin d\'œil au patrimoine local, tandis que de grandes baies vitrées laissent entrer la mer.',
      resto_p3: "Une partie de l'équipe historique est restée — dont Marion, en salle depuis l'époque du Ker Bleu — aux côtés des nouveaux visages qui font vivre le Soli aujourd'hui.",
      values_title: 'Ce qui compte pour nous',
      gal_k: 'Galerie', gal_t: 'En images',
      gal_p: "La salle, la terrasse, les assiettes et la mer — un aperçu de l'atmosphère du Soli.",
      contact_k: 'Réservation & contact', contact_t: 'Venez nous voir',
      contact_lead: 'La réservation se fait par téléphone. Nous vous conseillons de réserver, surtout aux beaux jours.',
      reserve_title: 'Réserver une table',
      reserve_p: 'Appelez-nous, nous trouverons le meilleur moment pour vous accueillir.',
      call_now: 'Appeler maintenant',
      address_title: 'Adresse',
      addr: '17 Boulevard Joseph Le Bihan\nPlage de Trestraou\n22700 Perros-Guirec',
      getdirections: 'Itinéraire →', hours_title2: 'Horaires',
      services_title: 'Services & équipements',
      nearby_title: 'Aux alentours',
      nearby_text: "À deux pas : la plage de Trestraou, le Sentier des Douaniers (GR34), le Parc des Sculptures Christian Gad et, un peu plus loin, Ploumanac'h et la Côte de Granit Rose.",
      foot_tag: 'Bistrot de bord de mer, face à la plage de Trestraou.',
      foot_follow: 'Explorer', rights: 'Tous droits réservés.',
      values: [
        { n: 'I', title: 'Générosité', text: 'Des assiettes copieuses, pensées pour partager et pour repartir rassasié.' },
        { n: 'II', title: 'Fraîcheur', text: 'Poissons de la criée et produits de saison, au fil des arrivages.' },
        { n: 'III', title: 'Accueil', text: "L'esprit d'un bistrot de bord de mer où l'on aime revenir." },
      ],
      tables: [
        { img: 'assets/terrasse.jpg', title: 'La terrasse', text: "Face à la plage, à l'ombre des parasols : la plus belle table de Trestraou aux beaux jours." },
        { img: 'assets/salle-mezzanine.jpg', title: 'La salle', text: 'Un intérieur repensé, bois et lumière douce, ouvert sur la mer par de grandes baies vitrées.' },
        { img: 'assets/bar.jpg', title: 'Le bar', text: "Cocktails, vins de Bretagne et du Sud, cidres et cafés — de l'apéritif au digestif." },
      ],
      sigDishes: [
        { img: 'assets/parillada.jpg', name: 'Parillada de poissons' },
        { img: 'assets/tataki-thon.jpg', name: 'Tataki de thon' },
        { img: 'assets/planche-mixte.jpg', name: 'Planche mixte' },
        { img: 'assets/salade-lo-soli.jpg', name: 'Salade Lo Soli' },
      ],
      services: ['Terrasse face à la mer','Bar complet & cocktails','Wi-Fi gratuit','Chaise bébé & menu enfant','Accès PMR','Animaux acceptés','Vente à emporter','Cartes bancaires','Parking gratuit à proximité'],
    },
    en: {
      reserve: 'Book',
      nav_accueil: 'Home', nav_carte: 'Menu', nav_resto: 'The Restaurant',
      nav_galerie: 'Gallery', nav_contact: 'Contact',
      hero_kicker: 'Seaside bistro · Perros-Guirec',
      hero_tag: 'Feet in the sand, facing Trestraou beach.',
      cta_menu: 'Discover the menu',
      intro_k: 'Welcome',
      intro_t: 'A warm bistro, eyes on the sea',
      intro_p1: 'Right on the seafront of Trestraou beach, Lo Soli blends the generosity of a brasserie with the ease of lunch by the water. Warm wood, comfortable banquettes and old photographs of Perros-Guirec: a place to feel good, from the morning coffee to the last glass of the evening.',
      intro_p2: 'Fresh produce, fish from the market, house meats and thin-crust pizzas — simple, honest cooking that follows the seasons.',
      tables_k: 'Our spaces', tables_t: 'Wherever you sit, the sea is there',
      sig_k: 'On the menu', sig_t: 'The essentials',
      sig_p: 'A few dishes that return to every table.', sig_cta: 'See the full menu',
      hours_k: 'Hours & service', hours_t: 'Three moments, every day',
      h_break_t: 'Breakfast', h_break_v: '9 – 11am',
      h_lunch_t: 'Lunch', h_lunch_v: '12 – 2pm',
      h_dinner_t: 'Dinner', h_dinner_v: '7 · 9pm',
      hours_note: 'Booking recommended, by phone — especially in season.',
      band_cta: 'Book on +33 2 96 91 14 69',
      insta_k: '@restaurant_lo_soli_22', insta_t: 'Follow life at Lo Soli',
      insta_p: 'The dishes of the day, sunsets over Trestraou and the atmosphere in the dining room.',
      insta_cta: 'Follow us on Instagram',
      carte_k: 'The menu', carte_t: 'Our menu',
      carte_p: "Generous brasserie cooking: fish and seafood from the market, house meats, thin-crust pizzas and home-made desserts. The menu changes with the seasons and the day's catch.",
      formule: 'Breakfast set · 9–11am · €10',
      carte_note: 'Savoyard dishes in winter · Lobster to order, one day ahead',
      carte_disclaimer: 'Sample menu for reference. The final menu and prices will be published soon.',
      carte_cta_t: 'A table is waiting for you', price_market: 'Market price',
      resto_k: 'Our story', resto_t: 'From Ker Bleu to Lo Soli',
      resto_lead: 'A Trestraou-beach address, reinvented in a modern, warm spirit — without losing any of its soul.',
      resto_p1: 'Lo Soli took over the walls of the former Ker Bleu, a seafront institution. After three months of work, the space was completely reimagined to marry the comfort of a bistro with the light of a room open to the ocean.',
      resto_p2: 'Light wood, comfortable banquettes and old photographs of Perros-Guirec: a nod to local heritage, while large bay windows let the sea pour in.',
      resto_p3: 'Part of the original team stayed on — including Marion, on the floor since the Ker Bleu days — alongside the new faces who bring Lo Soli to life today.',
      values_title: 'What matters to us',
      gal_k: 'Gallery', gal_t: 'In pictures',
      gal_p: 'The room, the terrace, the plates and the sea — a glimpse of the Lo Soli atmosphere.',
      contact_k: 'Booking & contact', contact_t: 'Come and see us',
      contact_lead: 'Bookings are taken by phone. We recommend reserving, especially in the sunny months.',
      reserve_title: 'Book a table',
      reserve_p: "Give us a call and we'll find the best time to welcome you.",
      call_now: 'Call now',
      address_title: 'Address',
      addr: '17 Boulevard Joseph Le Bihan\nTrestraou Beach\n22700 Perros-Guirec, France',
      getdirections: 'Directions →', hours_title2: 'Hours',
      services_title: 'Services & amenities',
      nearby_title: 'Nearby',
      nearby_text: "Just steps away: Trestraou beach, the Customs Officers' Path (GR34), the Christian Gad Sculpture Park and, a little further, Ploumanac'h and the Pink Granite Coast.",
      foot_tag: 'Seaside bistro, facing Trestraou beach.',
      foot_follow: 'Explore', rights: 'All rights reserved.',
      values: [
        { n: 'I', title: 'Generosity', text: 'Hearty plates, made to share and to leave you satisfied.' },
        { n: 'II', title: 'Freshness', text: "Fish from the market and seasonal produce, with the day's catch." },
        { n: 'III', title: 'Welcome', text: 'The spirit of a seaside bistro you love coming back to.' },
      ],
      tables: [
        { img: 'assets/terrasse.jpg', title: 'The terrace', text: 'Facing the beach, in the shade of the parasols — the finest table in Trestraou on a sunny day.' },
        { img: 'assets/salle-mezzanine.jpg', title: 'The dining room', text: 'A reimagined interior — wood and soft light, open to the sea through large bay windows.' },
        { img: 'assets/bar.jpg', title: 'The bar', text: "Cocktails, wines from Brittany and the South, ciders and coffees — from aperitif to digestif." },
      ],
      sigDishes: [
        { img: 'assets/parillada.jpg', name: 'Fish parillada' },
        { img: 'assets/tataki-thon.jpg', name: 'Tuna tataki' },
        { img: 'assets/planche-mixte.jpg', name: 'Mixed board' },
        { img: 'assets/salade-lo-soli.jpg', name: 'Lo Soli salad' },
      ],
      services: ['Sea-facing terrace','Full bar & cocktails','Free Wi-Fi',"High chair & kids' menu",'Wheelchair access','Pets welcome','Takeaway','Card payments','Free parking nearby'],
    },
  };

  /* ─── State ─────────────────────────────────────────── */
  let lang = localStorage.getItem('lo-soli-lang') || 'fr';
  let revealObserver;

  function t(key) { return T[lang][key] ?? T.fr[key] ?? key; }

  /* ─── i18n ──────────────────────────────────────────── */
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = t(el.dataset.i18n);
      if (val !== undefined) el.textContent = val;
    });
    const btnFr = document.getElementById('btn-fr');
    const btnEn = document.getElementById('btn-en');
    if (btnFr) { btnFr.classList.toggle('active', lang === 'fr'); }
    if (btnEn) { btnEn.classList.toggle('active', lang === 'en'); }

    const fh = document.getElementById('footer-hours');
    if (fh) fh.textContent = `${t('h_break_t')} · ${t('h_break_v')}\n${t('h_lunch_t')} · ${t('h_lunch_v')}\n${t('h_dinner_t')} · ${t('h_dinner_v')}`;

    buildDynamic();
  }

  function setLang(l) {
    lang = l;
    localStorage.setItem('lo-soli-lang', l);
    document.documentElement.lang = l === 'en' ? 'en' : 'fr';
    applyTranslations();
  }

  /* ─── Dynamic section builders ──────────────────────── */
  function buildDynamic() {
    buildTablesGrid();
    buildSigDishes();
    buildInstaGrid();
    buildMenuSections();
    buildValuesGrid();
    buildServicesGrid();
    buildGalleryGrid();
    reObserve();
  }

  function buildTablesGrid() {
    const el = document.getElementById('tables-grid');
    if (!el) return;
    el.innerHTML = t('tables').map((c, i) => `
      <div class="card" data-reveal data-delay="${i + 1}">
        <div class="card-img-wrap">
          <img class="card-img" src="${c.img}" alt="${c.title}" loading="lazy">
        </div>
        <div class="card-body">
          <h3 class="card-title">${c.title}</h3>
          <p class="card-text">${c.text}</p>
        </div>
      </div>`).join('');
  }

  function buildSigDishes() {
    const el = document.getElementById('sig-dishes');
    if (!el) return;
    el.innerHTML = t('sigDishes').map((d, i) => `
      <div class="dish-card" data-reveal data-delay="${i + 1}">
        <img class="dish-img" src="${d.img}" alt="${d.name}" loading="lazy">
        <div class="dish-overlay"></div>
        <p class="dish-name">${d.name}</p>
      </div>`).join('');
  }

  function buildInstaGrid() {
    const el = document.getElementById('insta-grid');
    if (!el) return;
    const imgs = ['assets/parillada.jpg','assets/terrasse.jpg','assets/tataki-thon.jpg','assets/salade-lo-soli.jpg','assets/planche-mixte.jpg','assets/salle-vue-mer.jpg'];
    el.innerHTML = imgs.map(src => `
      <a class="insta-cell" href="https://www.instagram.com/restaurant_lo_soli_22/" target="_blank" rel="noopener">
        <img src="${src}" alt="" loading="lazy">
      </a>`).join('');
  }

  function buildMenuSections() {
    const el = document.getElementById('menu-sections');
    if (!el) return;
    const fr = lang === 'fr';
    el.innerHTML = MENU_DATA.map((sec, si) => `
      <div class="menu-section" data-reveal data-delay="${(si % 3) + 1}">
        <div class="menu-section-head">
          <h2 class="menu-section-title">${fr ? sec.tFr : sec.tEn}</h2>
          <span class="menu-divider"></span>
          <span class="menu-section-note">${fr ? sec.nFr : sec.nEn}</span>
        </div>
        ${sec.items.map(it => `
          <div class="menu-item">
            <div class="menu-item-info">
              <p class="menu-item-name">${it.name}${it.star ? '<span class="menu-item-star">★</span>' : ''}</p>
              <p class="menu-item-desc">${fr ? it.fr : it.en}</p>
            </div>
            <span class="menu-item-price">${it.market ? t('price_market') : it.p + ' €'}</span>
          </div>`).join('')}
      </div>`).join('');
  }

  function buildValuesGrid() {
    const el = document.getElementById('values-grid');
    if (!el) return;
    el.innerHTML = t('values').map((v, i) => `
      <div class="value-item" data-reveal data-delay="${i + 1}">
        <div class="value-num">${v.n}</div>
        <h3 class="value-title">${v.title}</h3>
        <p class="value-text">${v.text}</p>
      </div>`).join('');
  }

  function buildServicesGrid() {
    const el = document.getElementById('services-grid');
    if (!el) return;
    el.innerHTML = t('services').map(s => `<span class="service-tag">${s}</span>`).join('');
  }

  function buildGalleryGrid() {
    const el = document.getElementById('gallery-grid');
    if (!el) return;
    const imgs = ['assets/salle-bar.jpg','assets/terrasse.jpg','assets/parillada.jpg','assets/salle-vue-mer.jpg','assets/tataki-thon.jpg','assets/interieur.jpg','assets/planche-mixte.jpg','assets/salle-brique.jpg','assets/salade-mer.jpg','assets/bar.jpg','assets/salade-lo-soli.jpg','assets/vue-exterieur.jpg','assets/salle-mezzanine.jpg','assets/emblem.jpg'];
    el.innerHTML = imgs.map((src, i) => `
      <div class="gallery-img-wrap" data-reveal data-delay="${(i % 4) + 1}">
        <img class="gallery-img" src="${src}" alt="" loading="lazy">
      </div>`).join('');
  }

  /* ─── Scroll reveal ─────────────────────────────────── */
  function initReveal() {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
  }

  function reObserve() {
    if (!revealObserver) return;
    document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(el => revealObserver.observe(el));
  }

  /* ─── Hero parallax ─────────────────────────────────── */
  function initParallax() {
    const img = document.querySelector('.hero-img');
    if (!img || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth <= 900) return;
    window.addEventListener('scroll', () => {
      img.style.transform = `translateY(${window.scrollY * 0.32}px)`;
    }, { passive: true });
  }

  /* ─── Page transitions ──────────────────────────────── */
  function navigate(href) {
    if (href === window.location.href || href === window.location.pathname) return;
    document.querySelector('.page-wrap').classList.add('is-exiting');
    setTimeout(() => { window.location.href = href; }, 280);
  }

  /* ─── Init ──────────────────────────────────────────── */
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  document.addEventListener('DOMContentLoaded', () => {
    // Nav transitions
    document.querySelectorAll('a[data-nav]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) return;
        e.preventDefault();
        navigate(href);
      });
    });

    // Lang buttons
    document.getElementById('btn-fr')?.addEventListener('click', () => setLang('fr'));
    document.getElementById('btn-en')?.addEventListener('click', () => setLang('en'));

    // Active nav
    const page = document.body.dataset.page;
    document.querySelectorAll(`.nav-link[data-page="${page}"]`).forEach(el => el.classList.add('active'));

    // Footer nav links (also get transitions)
    document.querySelectorAll('.footer-link[href]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('http')) return;
        e.preventDefault();
        navigate(href);
      });
    });

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const siteNav   = document.getElementById('site-nav');
    if (hamburger && siteNav) {
      hamburger.addEventListener('click', () => {
        const open = hamburger.classList.toggle('is-open');
        siteNav.classList.toggle('is-open', open);
        hamburger.setAttribute('aria-expanded', String(open));
      });
      siteNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('is-open');
          siteNav.classList.remove('is-open');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });
      document.addEventListener('click', e => {
        if (!hamburger.contains(e.target) && !siteNav.contains(e.target)) {
          hamburger.classList.remove('is-open');
          siteNav.classList.remove('is-open');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    initReveal();
    initParallax();
    applyTranslations();
  });
})();
