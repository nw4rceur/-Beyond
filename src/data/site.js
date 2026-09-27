// Les contenus principaux du site vivent ici.
// L'objectif est de pouvoir faire évoluer un projet sans toucher à sa mise en page.

export const projects = [
  {
    slug: 'aracore',
    name: 'Aracore',
    year: '2026 — aujourd’hui',
    status: 'En développement',
    kind: 'Produit / application',
    headline: 'Savoir si une machine est disponible avant de descendre à la laverie.',
    preview: 'Aracore est parti d’une situation banale en résidence : descendre à la laverie et découvrir que toutes les machines sont prises. Le projet transforme ce petit irritant en un service mobile, communautaire et rapide à consulter.',
    intro: 'Aracore part d’un problème simple en résidence étudiante : descendre jusqu’à la laverie pour découvrir que toutes les machines sont occupées.',
    url: 'https://aracore.fr',
    image: '/images/aracore-cover.png',
    stack: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'Firebase', 'PWA'],
    roles: ['Produit', 'UX / UI', 'Développement', 'Identité'],
    challenge: 'Éviter les déplacements inutiles sans imposer de matériel supplémentaire aux résidences.',
    brief: [
      'Consulter rapidement les machines d’une résidence',
      'Signaler une machine libre, occupée ou hors service',
      'Limiter une réservation à une seule machine',
      'Suivre la durée d’un cycle et prévenir avant sa fin',
      'Permettre la consultation sans compte',
      'Rester simple à utiliser sur mobile et en PWA',
    ],
    approach: 'La première version repose sur une logique communautaire : les informations utiles viennent des usages et des signalements. L’enjeu est donc de rendre l’état des machines lisible en quelques secondes, tout en gardant des règles suffisamment claires pour éviter les incohérences.',
    build: 'Le produit combine une interface Flutter, une base Supabase/PostgreSQL, des services Firebase et une version PWA. La logique couvre les états des machines, les cycles, les notifications, l’authentification et les règles d’accès.',
    learnings: 'Aracore est le premier projet sur lequel j’ai dû penser au-delà de l’interface : transformer un besoin quotidien en fonctionnalités, gérer des états en temps réel, arbitrer entre simplicité et fiabilité, puis faire évoluer un prototype vers un service réellement utilisable.',
    links: [
      { label: 'Voir Aracore', href: 'https://aracore.fr', icon: 'external' },
    ],
  },
  {
    slug: 'aracnet',
    name: 'Aracnet',
    year: '2026 — aujourd’hui',
    status: 'En évolution',
    kind: 'Média numérique',
    headline: 'Construire un média avec une identité éditoriale et une lecture claire.',
    preview: 'Aracnet est un média en construction autour de l’Afrique et de la diaspora. Au-delà du code, le projet me pousse à travailler la hiérarchie de l’information, le rythme éditorial et une identité qui ne ressemble pas à un simple agrégateur d’articles.',
    intro: 'Aracnet travaille à la fois le contenu, la hiérarchie de l’information, l’identité d’un média et sa présence sur le web.',
    url: 'https://aracnet.fr',
    image: '/images/aracnet-cover.png',
    stack: ['React', 'JavaScript', 'HTML', 'CSS', 'SEO technique'],
    roles: ['Direction éditoriale', 'Interface', 'Développement web', 'SEO'],
    challenge: 'Donner une structure claire à un contenu dense sans recopier l’interface d’un média classique.',
    brief: [
      'Donner une vraie hiérarchie aux sujets',
      'Garder une lecture confortable sur mobile',
      'Créer une identité reconnaissable',
      'Préparer le site pour une publication régulière',
      'Travailler le référencement dès la structure des pages',
    ],
    approach: 'Le travail commence par le contenu : quelles informations doivent ressortir, dans quel ordre et avec quel rythme. L’interface vient ensuite soutenir cette hiérarchie plutôt que la remplacer.',
    build: 'Aracnet me sert aussi de terrain front-end : composants réutilisables, responsive, performances, métadonnées et structure HTML évoluent en parallèle de la ligne éditoriale.',
    learnings: 'Aracnet m’a surtout appris à réfléchir au contenu avant de réfléchir à l’interface, et à mieux relier identité graphique, navigation, éditorial et SEO.',
    links: [
      { label: 'Voir Aracnet', href: 'https://aracnet.fr', icon: 'external' },
    ],
  },
  {
    slug: 'craph',
    name: 'CRAPH.fr',
    year: '2026',
    status: 'En ligne',
    kind: 'Site institutionnel',
    headline: 'Clarifier les services d’une structure de réadaptation et améliorer sa présence en ligne.',
    preview: 'CRAPH.fr répond à un besoin plus institutionnel : rendre les services de la structure plus simples à comprendre, organiser des informations parfois techniques et construire une présence web plus cohérente et plus facile à trouver.',
    intro: 'Refonte et développement du site du Centre de Rééducation et d’Appareillage Prothétique et Orthétique de Libreville.',
    url: 'https://craph.fr',
    image: '/images/craph-cover.png',
    stack: ['Web', 'Responsive', 'Contenu', 'SEO', 'Search Console'],
    roles: ['Structure du site', 'Interface', 'Intégration', 'SEO'],
    challenge: 'Présenter des activités médicales et techniques de façon compréhensible pour un public large.',
    brief: [
      'Présenter clairement les services',
      'Rendre les informations pratiques faciles à trouver',
      'Adapter le site au mobile',
      'Mettre à jour le vocabulaire et les contenus',
      'Améliorer les bases du référencement naturel',
    ],
    approach: 'La structure met l’accent sur les services, les informations pratiques et les moyens de contact. Le design reste volontairement sobre pour laisser la priorité au contenu.',
    build: 'Le travail porte sur l’architecture de contenu, la cohérence graphique, le responsive, l’intégration et les fondamentaux SEO, avec suivi dans Search Console.',
    learnings: 'CRAPH m’a confronté à un contexte différent de mes projets personnels : travailler à partir de besoins existants, intégrer des retours, hiérarchiser des informations professionnelles et maintenir un site après sa mise en ligne.',
    links: [
      { label: 'Voir CRAPH.fr', href: 'https://craph.fr', icon: 'external' },
    ],
  },
];

export const capabilityGroups = [
  {
    id: 'build',
    label: 'Construire',
    note: 'Les outils que j’utilise le plus directement dans mes projets.',
    items: [
      { n: '01', icon: 'web', title: 'Développement web', desc: 'Interfaces responsives, composants, intégration et interactions.', tools: ['React', 'JavaScript', 'HTML sémantique', 'CSS', 'Framer Motion'] },
      { n: '02', icon: 'mobile', title: 'Applications & PWA', desc: 'Interfaces mobiles, états, notifications et déploiement.', tools: ['Flutter', 'Dart', 'PWA', 'Firebase'] },
      { n: '03', icon: 'backend', title: 'Backend & données', desc: 'Relier l’interface à des données et poser des règles d’accès cohérentes.', tools: ['Supabase', 'PostgreSQL', 'Firebase', 'RLS', 'Auth'] },
    ],
  },
  {
    id: 'design',
    label: 'Concevoir',
    note: 'Transformer un besoin en parcours, puis en interface lisible.',
    items: [
      { n: '04', icon: 'ux', title: 'UI / UX', desc: 'Parcours, structure de l’information, wireframes et micro-interactions.', tools: ['Parcours', 'Wireframes', 'Architecture', 'Prototypage'] },
      { n: '05', icon: 'brand', title: 'Identité numérique', desc: 'Faire tenir ensemble typographie, couleurs, iconographie et comportement.', tools: ['Direction visuelle', 'Brand UI', 'Design system', 'Iconographie'] },
    ],
  },
  {
    id: 'visibility',
    label: 'Rendre visible',
    note: 'Le référencement est traité pendant le développement, pas à la fin.',
    items: [
      { n: '06', icon: 'seo', title: 'SEO technique', desc: 'Structure HTML, indexation, métadonnées et performance.', tools: ['Schema.org', 'Canonical', 'Sitemap', 'Search Console', 'Core Web Vitals'] },
      { n: '07', icon: 'shield', title: 'Qualité web', desc: 'Quelques réflexes de sécurité et de maintenance intégrés au projet.', tools: ['CSP', 'Headers HTTP', 'RLS', 'Validation', 'Git'] },
    ],
  },
  {
    id: 'explore',
    label: 'Explorer',
    note: 'Une ouverture progressive vers le logiciel embarqué.',
    items: [
      { n: '08', icon: 'firmware', title: 'Firmware — langage C', desc: 'Programmation embarquée en C, logique de contrôle et premières applications sur microcontrôleurs.', tools: ['C', 'Microcontrôleurs', 'Entrées / sorties', 'Logique de contrôle'] },
    ],
  },
];

export const capabilities = capabilityGroups.flatMap((group) => group.items);

export const seoDetails = [
  { icon: 'sitemap', title: 'Indexation', text: 'Titres, descriptions, canonical, sitemap.xml, robots.txt et maillage interne.' },
  { icon: 'seo', title: 'Données structurées', text: 'Schema.org pour le site, la personne, les projets et les fils d’Ariane.' },
  { icon: 'speed', title: 'Performance', text: 'Images optimisées, chargement différé hors hero et dépendances limitées.' },
  { icon: 'lock', title: 'Sécurité', text: 'CSP, headers HTTP, règles d’accès backend et aucun secret dans le bundle React.' },
];

export const personalLinks = [
  { label: 'Instagram', href: 'https://instagram.com/beyond_31_', icon: 'instagram' },
  { label: 'GitHub', href: 'https://github.com/nw4rceur/-Beyond', icon: 'github' },
];
