// Le contenu reste séparé des composants : modifier un projet ne demande pas
// d’aller chercher son texte dans plusieurs pages React.

export const projects = [
  {
    slug: 'aracore',
    name: 'Aracore',
    year: '2026',
    status: 'Produit en développement',
    kind: 'Application / produit',
    headline: 'Savoir si une machine est disponible avant de descendre à la laverie.',
    intro: 'Une application pensée pour la vie en résidence étudiante : disponibilité communautaire, cycles, entraide et bons plans.',
    url: 'https://aracore.fr',
    image: '/images/aracore-cover.png',
    stack: ['Flutter', 'Dart', 'PWA', 'Supabase', 'Firebase'],
    roles: ['Conception produit', 'UX / UI', 'Développement', 'Déploiement'],
    challenge: 'Éviter un déplacement inutile jusqu’à une laverie sans imposer de nouveau matériel aux résidences.',
    approach: 'La disponibilité est construite autour des déclarations des utilisateurs. L’interface doit donc être très rapide à lire, limiter les actions inutiles et garder des états cohérents.',
    build: 'La logique du produit couvre notamment les états en temps réel, les cycles, les notifications, l’authentification et les règles d’accès. Le même projet doit rester utilisable sur mobile et en PWA.',
    learnings: 'Aracore me fait travailler un produit complet : conception, logique métier, temps réel, qualité des données, mobile, déploiement et retours utilisateurs.',
    constraints: ['Pas de capteurs imposés', 'Usage très rapide sur mobile', 'Données communautaires', 'PWA et Android'],
  },
  {
    slug: 'aracnet',
    name: 'aracnet',
    year: '2026',
    status: 'Projet web en évolution',
    kind: 'Web / éditorial',
    headline: 'Une autre manière d’organiser et de parcourir l’information en ligne.',
    intro: 'Un terrain de travail autour de la hiérarchie éditoriale, de la lisibilité et du comportement d’une interface riche en contenu.',
    url: 'https://aracnet.fr',
    image: '/images/aracnet-cover.png',
    stack: ['React', 'JavaScript', 'Responsive', 'SEO technique'],
    roles: ['Conception', 'Interface', 'Développement web', 'Éditorial'],
    challenge: 'Donner une structure claire à beaucoup d’informations sans simplement recopier les codes d’un média classique ou d’un réseau social.',
    approach: 'Le travail porte surtout sur le rythme des pages, la hiérarchie visuelle, la navigation et la capacité à retrouver rapidement une information.',
    build: 'Le projet sert aussi de terrain front-end : composants réutilisables, responsive, performances, métadonnées et structure HTML restent travaillés en même temps que l’interface.',
    learnings: 'aracnet me permet de pousser le rapport entre contenu, interface et référencement sans transformer le site en démonstration technique.',
    constraints: ['Contenu dense', 'Lecture mobile', 'Navigation claire', 'SEO sans surcharger les pages'],
  },
  {
    slug: 'craph',
    name: 'CRAPH.fr',
    year: '2026',
    status: 'Site en ligne',
    kind: 'Site institutionnel',
    headline: 'Rendre lisibles les services d’un centre de rééducation et d’appareillage.',
    intro: 'Site du Centre de Rééducation et d’Appareillage Prothétique et Orthétique de Libreville.',
    url: 'https://craph.fr',
    image: '/images/craph-cover.png',
    stack: ['Web', 'UX', 'Responsive', 'Contenu', 'SEO'],
    roles: ['Conception', 'UX', 'Intégration', 'Mise en ligne'],
    challenge: 'Présenter des activités médicales et techniques de façon compréhensible sans noyer le visiteur dans le vocabulaire métier.',
    approach: 'La structure met en avant les services, les informations pratiques et les moyens de contact avec une interface volontairement sobre.',
    build: 'Le travail a surtout porté sur l’architecture de contenu, la cohérence graphique, le responsive, l’intégration et les bases techniques du référencement.',
    learnings: 'CRAPH.fr m’a obligé à adapter le design au contenu réel et à un public large plutôt qu’à construire une interface uniquement pour son aspect visuel.',
    constraints: ['Information compréhensible', 'Public varié', 'Responsive', 'Accès rapide aux contacts'],
  },
];

export const capabilityGroups = [
  {
    id: 'solide',
    label: 'Solide',
    note: 'Compétences que j’utilise régulièrement sur mes projets.',
    items: [
      { n: '01', icon: 'web', title: 'Front-end web', level: 'Pratique régulière', desc: 'Construire des interfaces propres, responsives et adaptées au contenu plutôt qu’à un template.', tools: ['React', 'JavaScript', 'HTML sémantique', 'CSS', 'Responsive', 'Framer Motion'] },
      { n: '02', icon: 'seo', title: 'SEO technique', level: 'Maîtrisé sur mes sites', desc: 'Structurer les pages pour qu’elles soient compréhensibles par les moteurs sans sacrifier l’expérience.', tools: ['Titles & descriptions', 'Canonical', 'Schema.org', 'Sitemap / robots', 'Open Graph', 'Core Web Vitals'] },
      { n: '03', icon: 'mobile', title: 'Mobile & PWA', level: 'Pratique projet', desc: 'Construire des parcours mobiles avec états, authentification, notifications et déploiement.', tools: ['Flutter', 'Dart', 'PWA', 'Android', 'Firebase'] },
    ],
  },
  {
    id: 'projet',
    label: 'En pratique',
    note: 'Compétences utilisées dans des projets concrets et encore approfondies.',
    items: [
      { n: '04', icon: 'backend', title: 'Backend léger & données', level: 'Pratique projet', desc: 'Relier une interface à de vraies données avec des règles d’accès claires et une structure maintenable.', tools: ['Supabase', 'PostgreSQL', 'Firebase', 'RLS', 'Auth'] },
      { n: '05', icon: 'ux', title: 'UX & conception produit', level: 'Pratique projet', desc: 'Partir d’un problème réel, réduire les étapes et tester le parcours avant d’ajouter des fonctions.', tools: ['Parcours', 'Wireframes', 'Architecture', 'Prototypage', 'Micro-interactions'] },
      { n: '06', icon: 'brand', title: 'Identité numérique', level: 'Pratique appliquée', desc: 'Faire tenir ensemble typographie, couleurs, iconographie, rythme et comportement d’une interface.', tools: ['Direction visuelle', 'Brand UI', 'Design system', 'Iconographie'] },
      { n: '07', icon: 'shield', title: 'Qualité & sécurité web', level: 'Réflexe de développement', desc: 'Limiter les erreurs évidentes : règles d’accès, headers, validation, dépendances et secrets hors du client.', tools: ['CSP & headers', 'RLS', 'Validation', 'Dépendances', 'Git', 'Secrets hors client'] },
    ],
  },
  {
    id: 'progression',
    label: 'En progression',
    note: 'Terrain d’apprentissage lié à ma formation en BUT GEII.',
    items: [
      { n: '08', icon: 'hardware', title: 'Électronique & embarqué', level: 'Niveau BUT GEII', desc: 'Comprendre, câbler, mesurer et prototyper des systèmes simples en parallèle du développement logiciel.', tools: ['Microcontrôleurs', 'Capteurs', 'Actionneurs', 'Logique', 'Électrotechnique', 'Prototypage'] },
    ],
  },
];

// Liste aplatie utilisée sur l’accueil pour garder le composant simple.
export const capabilities = capabilityGroups.flatMap((group) => group.items);

export const seoDetails = [
  { icon: 'sitemap', title: 'Indexation', text: 'Titres uniques, descriptions, canonical, sitemap.xml, robots.txt et liens internes cohérents.' },
  { icon: 'seo', title: 'Données structurées', text: 'Schema.org pour la personne, le site, le fil d’Ariane et les projets quand le contenu le justifie.' },
  { icon: 'speed', title: 'Performance', text: 'Lazy-loading hors hero, images dimensionnées par le layout et dépendances limitées pour protéger les Core Web Vitals.' },
  { icon: 'lock', title: 'Sécurité', text: 'CSP, headers HTTP, règles d’accès côté backend et aucune donnée sensible écrite dans le bundle React.' },
];
