(() => {
  /* ─── Data ─────────────────────────────────────────── */
  const MENU_DATA = [
    { tFr: 'Les planches', tEn: 'Boards', nFr: '', nEn: '', items: [
      { name: 'Planche mixte', fr: 'Jambon, comté, camembert, rostelle, andouille, coppa, saucisson, jambon de pays italien.', en: 'Ham, comté, camembert, rostelle, andouille, coppa, salami, Italian country ham.', p: 18.50 },
      { name: 'Planche de tapas', fr: 'Guacamole, houmous, doritos, accras, calamars frits.', en: 'Guacamole, hummus, tortilla chips, accras, fried squid.', p: 18.50 },
    ]},
    { tFr: 'Les entrées', tEn: 'Starters', nFr: '', nEn: '', items: [
      { name: 'Soupe de poisson maison', fr: 'Croûtons et rouille.', en: 'Home-made fish soup, croutons and rouille.', p: 14.90 },
      { name: 'Rillettes de maquereau et ses toasts', fr: '', en: 'Mackerel rillettes with toast.', p: 13.00 },
      { name: 'Tataki de thon et sa salade thaï', fr: '', en: 'Tuna tataki with Thai salad.', p: 18.50 },
      { name: 'Assiette de foie gras', fr: '', en: 'Foie gras plate.', p: 18.00 },
    ]},
    { tFr: 'Les fruits de mer', tEn: 'Seafood', nFr: '', nEn: '', items: [
      { name: 'Assiette de bulots / aïoli', fr: '', en: 'Whelks with aïoli.', p: 13.00 },
      { name: 'Assiette de 8 crevettes BIO Madagascar', fr: '', en: '8 organic Madagascar prawns.', p: 22.00 },
      { name: 'Assiette 6 huîtres, 6 crevettes, 8 bulots', fr: '', en: '6 oysters, 6 prawns, 8 whelks.', p: 32.00 },
      { name: 'Duo 6 crevettes et 8 bulots', fr: '', en: '6 prawns and 8 whelks.', p: 20.00 },
      { name: 'Duo 6 crevettes et 6 huîtres', fr: '', en: '6 prawns and 6 oysters.', p: 22.00 },
    ]},
    { tFr: 'Les huîtres de Lanmodez N° 3', tEn: 'Lanmodez Oysters N° 3', nFr: '', nEn: '', items: [
      { name: 'Les 6', fr: '', en: '6 oysters.', p: 12.00 },
      { name: 'Les 9', fr: '', en: '9 oysters.', p: 18.00 },
      { name: 'Les 12', fr: '', en: '12 oysters.', p: 23.00 },
    ]},
    { tFr: 'Les grandes salades', tEn: 'Large salads', nFr: '', nEn: '', items: [
      { name: 'La Triagoz', fr: 'Salade, tataki de thon, saumon fumé, Saint-Jacques, tomate, toast.', en: 'Salad, tuna tataki, smoked salmon, scallops, tomato, toast.', p: 24.90 },
      { name: "L'italienne", fr: 'Salade, tomate, roquette, burrata, légumes marinés, jambon de pays, porchetta.', en: 'Salad, tomato, rocket, burrata, marinated vegetables, country ham, porchetta.', p: 22.50 },
      { name: 'La salade Lo Soli', fr: 'Salades mélangées, lardons déglacés, tomate, œuf, coppa, pignons de pin, noix, toast aux fromages, vinaigrette noix/framboises.', en: 'Mixed leaves, pan-fried lardons, tomato, egg, coppa, pine nuts, walnuts, cheese toast, walnut and raspberry dressing.', p: 22.00 },
      { name: 'La "façon" César', fr: 'Poulet, croûtons, iceberg, œuf, tomate, parmesan, sauce maison.', en: 'Chicken, croutons, iceberg, egg, tomato, parmesan, house sauce.', p: 19.90 },
      { name: 'La "bruschetta"', fr: 'Salade, tomate, concombre, noix, tartine chèvre, mozzarella, porchetta, miel.', en: 'Salad, tomato, cucumber, walnuts, goat cheese toast, mozzarella, porchetta, honey.', p: 21.00 },
    ]},
    { tFr: 'Les burgers et viandes', tEn: 'Burgers & meats', nFr: '', nEn: '', items: [
      { name: 'Chicken burger', fr: 'Poulet pané, frites et salade.', en: 'Breaded chicken, fries and salad.', p: 18.90 },
      { name: 'Original burger', fr: '180 g avec poitrine fumée, frites et salade.', en: '180g smoked bacon burger, fries and salad.', p: 19.90 },
      { name: 'Savoyard burger', fr: 'Poitrine fumée, fromage de chèvre, frites et salade.', en: 'Smoked bacon, goat cheese, fries and salad.', p: 19.90 },
      { name: 'Tartare de bœuf', fr: 'Non préparé, 180 g, frites et salade.', en: 'Unprepared, 180g, fries and salad.', p: 19.90 },
      { name: "L'entrecôte", fr: '300 g VBF, sauce maison, frites et salade.', en: '300g VBF sirloin, house sauce, fries and salad.', p: 28.00 },
      { name: 'Filet de bœuf Rossini', fr: 'Gratin dauphinois et légumes.', en: 'Beef tenderloin Rossini, dauphinoise gratin and vegetables.', p: 29.00 },
      { name: 'Mix grillé de 4 viandes', fr: 'Sauce béarnaise ou piperade, frites et salade.', en: 'Mixed grill of 4 meats, béarnaise or piperade sauce, fries and salad.', p: 29.00 },
      { name: 'Côte de bœuf à partager', fr: 'Environ 1,2 kg VBF.', en: 'Around 1.2 kg VBF, to share.', p: 79.00 },
      { name: 'Bavette de bœuf sauce échalotes', fr: '200 g VBF, frites et salade.', en: '200g VBF skirt steak, shallot sauce, fries and salad.', p: 21.50 },
      { name: "Épaule d'agneau confite", fr: 'Comme un couscous.', en: 'Slow-cooked lamb shoulder, couscous style.', p: 28.00 },
      { name: "Souris d'agneau", fr: 'Écrasé de légumes, miel, romarin.', en: 'Lamb shank, vegetable crush, honey and rosemary.', p: 25.00 },
    ]},
    { tFr: 'Suppléments', tEn: 'Extras', nFr: '', nEn: '', items: [
      { name: 'Sauce maison', fr: "Poivre vert, roquefort, béarnaise, beurre maître d'hôtel, compotée d'échalotes.", en: "Green pepper, roquefort, béarnaise, maître d'hôtel butter, shallot compote.", p: 2 },
      { name: 'Frites ou salade', fr: '', en: 'Fries or salad.', p: 4 },
    ]},
    { tFr: 'Les woks', tEn: 'Woks', nFr: '', nEn: '', items: [
      { name: 'Wok végétarien', fr: '', en: 'Vegetarian wok.', p: 22.00 },
      { name: 'Wok de bœuf', fr: '', en: 'Beef wok.', p: 26.90 },
      { name: 'Wok de poulet', fr: '', en: 'Chicken wok.', p: 26.90 },
      { name: 'Wok de gambas', fr: '', en: 'King prawn wok.', p: 26.90 },
    ]},
    { tFr: 'Les poissons et spécialités', tEn: 'Fish & specialities', nFr: '', nEn: '', items: [
      { name: 'Parillada', fr: 'Bar, Saint-Jacques, gambas, merlu, moules. Écrasé de pommes de terre et légumes.', en: 'Sea bass, scallops, king prawns, hake, mussels. Crushed potatoes and vegetables.', p: 29.00, star: true },
      { name: 'Saint-Jacques rôties, armoricaine risotto', fr: '', en: 'Roasted scallops, armoricaine risotto.', p: 27.00 },
      { name: 'Steak de thon grillé', fr: 'Sauce thaï, riz et légumes wok.', en: 'Grilled tuna steak, Thai sauce, rice and wok vegetables.', p: 28.00 },
      { name: 'La Cotriade', fr: 'Soupe maison, trois poissons, gambas et légumes.', en: 'Home-made fish stew, three fish, king prawns and vegetables.', p: 29.50 },
      { name: 'Tajine de lotte au citron et au safran', fr: 'Semoule et légumes.', en: 'Monkfish tagine, lemon and saffron, couscous and vegetables.', p: 29.00 },
    ]},
    { tFr: 'Les moules frites', tEn: 'Mussels & fries', nFr: '400 g', nEn: '400g', items: [
      { name: 'Moules marinières', fr: '', en: 'Marinière mussels.', p: 18.90 },
      { name: 'Moules à la crème', fr: '', en: 'Cream mussels.', p: 19.90 },
      { name: 'Moules au roquefort', fr: '', en: 'Roquefort mussels.', p: 20.90 },
      { name: 'Moules à la normande', fr: '', en: 'Normande mussels.', p: 20.90 },
    ]},
    { tFr: 'Les pizzas · pâte maison · base tomate', tEn: 'Pizzas · home-made dough · tomato base', nFr: '', nEn: '', items: [
      { name: 'Régina', fr: 'Jambon, champignons.', en: 'Ham, mushrooms.', p: 15.90 },
      { name: 'Reine', fr: 'Jambon, champignons, olives.', en: 'Ham, mushrooms, olives.', p: 16.90 },
      { name: 'Royale', fr: 'Jambon, champignons, olives, poivrons.', en: 'Ham, mushrooms, olives, peppers.', p: 16.90 },
      { name: 'Quatre saisons', fr: 'Jambon, champignons, anchois, câpres.', en: 'Ham, mushrooms, anchovies, capers.', p: 16.90 },
      { name: 'Vesuvio', fr: 'Chorizo, champignons, mozzarella.', en: 'Chorizo, mushrooms, mozzarella.', p: 17.90 },
      { name: 'Chef', fr: 'Chorizo, poivrons, oignons confits.', en: 'Chorizo, peppers, caramelised onions.', p: 17.90 },
      { name: 'Dicarne', fr: 'Jambon, lardons, champignons.', en: 'Ham, lardons, mushrooms.', p: 16.90 },
      { name: 'Bretonne', fr: 'Andouille, oignons, crème fraîche.', en: 'Andouille, onions, crème fraîche.', p: 17.90 },
      { name: 'Quatre fromages', fr: 'Mozzarella, comté, roquefort, chèvre.', en: 'Mozzarella, comté, roquefort, goat cheese.', p: 17.90 },
      { name: 'Montagnarde', fr: 'Lardons, raclette, pommes de terre.', en: 'Lardons, raclette cheese, potatoes.', p: 17.90 },
      { name: 'Burratina', fr: 'Burrata, roquette, jambon de pays.', en: 'Burrata, rocket, country ham.', p: 20.90 },
      { name: 'Chèvre miel', fr: 'Fromage de chèvre, miel, roquette.', en: 'Goat cheese, honey, rocket.', p: 16.90 },
      { name: 'Indienne', fr: 'Poulet tandoori, oignons, poivrons, crème fraîche.', en: 'Tandoori chicken, onions, peppers, crème fraîche.', p: 20.50 },
      { name: 'Frutti di mare', fr: 'Fruits de mer, ail, persil.', en: 'Seafood, garlic, parsley.', p: 20.90 },
      { name: 'Végétarienne', fr: 'Légumes grillés, mozzarella.', en: 'Grilled vegetables, mozzarella.', p: 17.00 },
      { name: 'Supplément garniture', fr: 'Sauf burrata.', en: 'Extra topping (except burrata).', p: 2 },
      { name: 'Pizza mixte', fr: '½ pizza au choix + salade de crudités.', en: 'Half pizza of your choice + crudités salad.', p: 16.90 },
    ]},
    { tFr: 'Les pizzas blanches · base crème fraîche', tEn: 'White pizzas · crème fraîche base', nFr: '', nEn: '', items: [
      { name: 'Paysanne', fr: 'Lardons, oignons, pommes de terre.', en: 'Lardons, onions, potatoes.', p: 17.50 },
      { name: 'Tartiflette', fr: 'Lardons, pommes de terre, reblochon.', en: 'Lardons, potatoes, reblochon.', p: 17.50 },
      { name: 'Vénéziano', fr: 'Saumon fumé, aneth, câpres.', en: 'Smoked salmon, dill, capers.', p: 20.50 },
    ]},
    { tFr: 'Menu enfant', tEn: "Children's menu", nFr: '13,90 €', nEn: '13.90 €', items: [
      { name: 'Boisson', fr: 'Jus de fruits, sirop ou diabolo.', en: 'Fruit juice, syrup or diabolo.' },
      { name: 'Plat', fr: 'Pizza bambino, jambon-frites, moules frites ou mini chicken burger.', en: 'Bambino pizza, ham and fries, mussels and fries, or mini chicken burger.' },
      { name: 'Dessert', fr: 'Glace pop-up ou crêpe.', en: 'Ice lolly or crêpe.' },
    ]},
    { tFr: 'Les desserts maisons', tEn: 'Home-made desserts', nFr: '', nEn: '', items: [
      { name: 'Assortiment 4 fromages', fr: '', en: 'Cheese selection (4 varieties).', p: 11 },
      { name: 'Café gourmand', fr: '', en: 'Coffee with assorted mini desserts.', p: 11 },
      { name: 'Moelleux chocolat', fr: '', en: 'Chocolate fondant.', p: 9 },
      { name: 'Kouign-amann', fr: '', en: 'Kouign-amann.', p: 9 },
      { name: 'Mousse au chocolat', fr: '', en: 'Chocolate mousse.', p: 8 },
      { name: 'Tarte aux fruits du jour', fr: '', en: "Today's fruit tart.", p: 9 },
      { name: 'Fraises chantilly', fr: '', en: 'Strawberries and chantilly cream.', p: 8 },
    ]},
    { tFr: 'Les apéritifs', tEn: 'Aperitifs', nFr: '', nEn: '', items: [
      { name: 'Kir Sauvignon', fr: '', en: 'Kir with Sauvignon white wine.', p: 4.90 },
      { name: 'Kir cidre breton', fr: '', en: 'Kir with Breton cider.', p: 4.90 },
      { name: 'Kir pétillant', fr: '', en: 'Sparkling kir.', p: 6 },
      { name: 'Kir royal', fr: '', en: 'Kir royal (Champagne).', p: 10 },
      { name: 'Coupe de Champagne', fr: '', en: 'Glass of Champagne.', p: 10 },
      { name: 'Martini / Suze / Campari / Porto', fr: '', en: 'Martini, Suze, Campari or Port.', p: 6 },
      { name: 'Ricard / Pastis 51 / Ty Jaune', fr: '', en: 'Ricard, Pastis 51 or Ty Jaune.', p: 5 },
      { name: 'Jameson / Whisky Armorik', fr: '', en: 'Jameson or Armorik whisky.', p: 8 },
      { name: "Ballantine's", fr: '', en: "Ballantine's Scotch whisky.", p: 8 },
      { name: 'Aberlour / Tourbé Deacon', fr: '', en: 'Aberlour or Deacon peated malt.', p: 10 },
      { name: 'Gin Bombay / Beefeater', fr: '', en: 'Bombay or Beefeater gin.', p: 8 },
      { name: 'Vodka Wyborowa', fr: '', en: 'Wyborowa vodka.', p: 8 },
      { name: 'Alcool + soda', fr: '', en: 'Spirit and mixer.', p: 10 },
    ]},
    { tFr: 'Les cocktails', tEn: 'Cocktails', nFr: '25 cl · 11 €', nEn: '25 cl · 11 €', items: [
      { name: 'Sex on the Beach', fr: '', en: '', p: 11 },
      { name: 'Piña Colada', fr: '', en: '', p: 11 },
      { name: 'Mojito', fr: '', en: '', p: 11 },
      { name: 'Breizh Mojito', fr: 'Mojito au cidre breton.', en: 'Mojito with Breton cider.', p: 11 },
      { name: 'Mojito Fraise', fr: '', en: 'Strawberry mojito.', p: 11 },
      { name: 'Moscow Mule', fr: '', en: '', p: 11 },
      { name: 'Aperol Spritz', fr: '', en: '', p: 11 },
      { name: 'Saint-Germain', fr: 'Elderflower, citron, pétillant.', en: 'Elderflower liqueur, lemon, sparkling wine.', p: 11 },
      { name: 'Expresso Martini', fr: '', en: '', p: 11 },
    ]},
    { tFr: 'Les mocktails sans alcool', tEn: 'Mocktails (non-alcoholic)', nFr: '25 cl · 7,90 €', nEn: '25 cl · 7.90 €', items: [
      { name: 'Colibri', fr: 'Mangue, passion, citron vert.', en: 'Mango, passion fruit, lime.', p: 7.90 },
      { name: 'Virgin Mojito', fr: '', en: '', p: 7.90 },
      { name: 'Virgin Colada', fr: '', en: '', p: 7.90 },
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
      intro_p2: "Produits frais, poissons de la criée, viandes maison et pizzas à pâte fine. Une cuisine simple et sincère qui suit les saisons.",
      tables_k: 'Nos espaces', tables_t: 'Où que vous vous installiez, la mer est là',
      sig_k: 'À la carte', sig_t: 'Les incontournables',
      sig_p: 'Quelques plats qui reviennent à chaque table.', sig_cta: 'Voir toute la carte',
      hours_k: 'Horaires & services', hours_t: 'Trois rendez-vous chaque jour',
      h_break_t: 'Petit-déjeuner', h_break_v: '9h – 11h',
      h_lunch_t: 'Déjeuner', h_lunch_v: '12h – 14h',
      h_dinner_t: 'Dîner', h_dinner_v: '19h · 21h',
      hours_note: 'Réservation conseillée par téléphone, surtout en saison.',
      band_cta: 'Réserver au 02 96 91 14 69',
      insta_k: '@restaurant_lo_soli_22', insta_t: 'Suivez la vie du Soli',
      insta_p: "Les plats du jour, les couchers de soleil sur Trestraou et l'ambiance en salle.",
      insta_cta: 'Nous suivre sur Instagram',
      carte_k: 'La carte', carte_t: 'Notre carte',
      carte_p: "Une carte variée pour que chacun trouve son bonheur, avec des produits frais et le plus local possible. Cuisine maison, produits de saison. N'hésitez pas à nous faire part de vos remarques.",
      formule: 'Formule petit-déjeuner · 9h–11h · 10 €',
      carte_note: 'Cuisine de saison · Pas de moules en hiver',
      carte_disclaimer: '',
      carte_cta_t: 'Une table vous attend', price_market: 'Prix du marché',
      resto_k: 'Notre histoire', resto_t: 'Du Ker Bleu à Lo Soli',
      resto_lead: "Une adresse de la plage de Trestraou, réinventée dans un esprit moderne et chaleureux, sans rien perdre de son âme.",
      resto_p1: "Lo Soli a pris place dans les murs de l'ancien Ker Bleu, une institution du front de mer. Après trois mois de travaux, le lieu a été entièrement repensé pour marier le confort d'un bistrot et la lumière d'une salle ouverte sur l'océan.",
      resto_p2: 'Bois clair, banquettes confortables et vieilles photographies de Perros-Guirec : un clin d\'œil au patrimoine local, tandis que de grandes baies vitrées laissent entrer la mer.',
      resto_p3: "Une partie de l'équipe historique est restée, dont Marion, en salle depuis l'époque du Ker Bleu, aux côtés des nouveaux visages qui font vivre le Soli aujourd'hui.",
      values_title: 'Ce qui compte pour nous',
      gal_k: 'Galerie', gal_t: 'En images',
      gal_p: "La salle, la terrasse, les assiettes et la mer : un aperçu de l'atmosphère du Soli.",
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
        { img: 'public/IMG_4812.jpg', title: 'La terrasse', text: "Face à la plage, à l'ombre des parasols : la plus belle table de Trestraou aux beaux jours." },
        { img: 'public/IMG_4811.jpg', title: 'La salle', text: 'Un intérieur repensé, bois et lumière douce, ouvert sur la mer par de grandes baies vitrées.' },
        { img: 'assets/bar.jpg', title: 'Le bar', text: "Cocktails, vins de Bretagne et du Sud, cidres et cafés, de l'apéritif au digestif." },
      ],
      sigDishes: [
        { img: 'assets/parillada.jpg', name: 'Parillada de poissons' },
        { img: 'assets/tataki-thon.jpg', name: 'La Triagoz' },
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
      intro_p2: 'Fresh produce, fish from the market, house meats and thin-crust pizzas. Simple, honest cooking that follows the seasons.',
      tables_k: 'Our spaces', tables_t: 'Wherever you sit, the sea is there',
      sig_k: 'On the menu', sig_t: 'The essentials',
      sig_p: 'A few dishes that return to every table.', sig_cta: 'See the full menu',
      hours_k: 'Hours & service', hours_t: 'Three moments, every day',
      h_break_t: 'Breakfast', h_break_v: '9 – 11am',
      h_lunch_t: 'Lunch', h_lunch_v: '12 – 2pm',
      h_dinner_t: 'Dinner', h_dinner_v: '7 · 9pm',
      hours_note: 'Booking recommended by phone, especially in season.',
      band_cta: 'Book on +33 2 96 91 14 69',
      insta_k: '@restaurant_lo_soli_22', insta_t: 'Follow life at Lo Soli',
      insta_p: 'The dishes of the day, sunsets over Trestraou and the atmosphere in the dining room.',
      insta_cta: 'Follow us on Instagram',
      carte_k: 'The menu', carte_t: 'Our menu',
      carte_p: "A varied menu for everyone, built around fresh, local produce. Home cooking and seasonal ingredients. No mussels in winter. We welcome your feedback.",
      formule: 'Breakfast set · 9–11am · €10',
      carte_note: 'Seasonal cooking · No mussels in winter',
      carte_disclaimer: '',
      carte_cta_t: 'A table is waiting for you', price_market: 'Market price',
      resto_k: 'Our story', resto_t: 'From Ker Bleu to Lo Soli',
      resto_lead: 'A Trestraou-beach address, reinvented in a modern, warm spirit, without losing any of its soul.',
      resto_p1: 'Lo Soli took over the walls of the former Ker Bleu, a seafront institution. After three months of work, the space was completely reimagined to marry the comfort of a bistro with the light of a room open to the ocean.',
      resto_p2: 'Light wood, comfortable banquettes and old photographs of Perros-Guirec: a nod to local heritage, while large bay windows let the sea pour in.',
      resto_p3: 'Part of the original team stayed on, including Marion on the floor since the Ker Bleu days, alongside the new faces who bring Lo Soli to life today.',
      values_title: 'What matters to us',
      gal_k: 'Gallery', gal_t: 'In pictures',
      gal_p: 'The room, the terrace, the plates and the sea: a glimpse of the Lo Soli atmosphere.',
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
        { img: 'public/IMG_4812.jpg', title: 'The terrace', text: 'Facing the beach, in the shade of the parasols. The finest table in Trestraou on a sunny day.' },
        { img: 'public/IMG_4811.jpg', title: 'The dining room', text: 'A reimagined interior: wood and soft light, open to the sea through large bay windows.' },
        { img: 'assets/bar.jpg', title: 'The bar', text: "Cocktails, wines from Brittany and the South, ciders and coffees, from aperitif to digestif." },
      ],
      sigDishes: [
        { img: 'assets/parillada.jpg', name: 'Fish parillada' },
        { img: 'assets/tataki-thon.jpg', name: 'La Triagoz' },
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
            ${it.p != null ? `<span class="menu-item-price">${it.market ? t('price_market') : Number.isInteger(it.p) ? it.p + ' €' : it.p.toFixed(2).replace('.', ',') + ' €'}</span>` : ''}
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
    const imgs = ['assets/coucher-soleil-terrasse.jpg','assets/coucher-soleil-verre.jpg','assets/salle-bar.jpg','assets/terrasse.jpg','assets/parillada.jpg','assets/salle-vue-mer.jpg','assets/tataki-thon.jpg','assets/interieur.jpg','assets/planche-mixte.jpg','assets/salle-brique.jpg','assets/salade-mer.jpg','assets/bar.jpg','assets/salade-lo-soli.jpg','assets/vue-exterieur.jpg','public/IMG_4811.jpg','assets/emblem.jpg'];
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
    }, { threshold: 0.1, rootMargin: window.innerWidth <= 900 ? '0px 0px -20px 0px' : '0px 0px -64px 0px' });
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
