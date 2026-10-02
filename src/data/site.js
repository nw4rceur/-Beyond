export const projects = [
  {
    slug: 'aracore',
    name: 'Aracore',
    year: '2026 — aujourd’hui',
    status: 'En développement',
    kind: 'Produit / application',
    headline: 'Savoir si une machine est disponible avant de descendre à la laverie.',
    preview: 'Aracore est né d’un problème que je rencontrais en résidence : descendre à la laverie pour découvrir que toutes les machines sont prises. L’idée est simplement de savoir où en sont les machines avant de se déplacer, puis d’ajouter les fonctions utiles autour de cet usage.',
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
    approach: 'La première version repose sur les signalements des résidents. Je travaille donc surtout sur deux choses : rendre l’état d’une machine compréhensible en quelques secondes et éviter que les réservations ou les statuts deviennent vite incohérents.',
    build: 'L’application est développée avec Flutter. Supabase/PostgreSQL gère les données et une partie des règles d’accès, tandis que Firebase intervient pour certains services comme les notifications. Une version PWA permet aussi d’utiliser Aracore depuis le web.',
    learnings: 'Aracore est le premier projet qui m’a obligé à sortir du simple écran : définir des règles, gérer des états qui changent, penser aux erreurs possibles et revoir plusieurs fois des choix qui semblaient évidents au départ.',
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
    preview: 'Aracnet est un média en construction autour de l’Afrique et de la diaspora. Le projet me sert autant à travailler le web qu’à réfléchir à la façon dont une information est mise en avant, rangée et lue.',
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
    approach: 'Je pars d’abord des contenus et de leur importance. L’interface vient ensuite : elle doit aider à repérer les sujets, à lire sans se perdre et à donner une identité reconnaissable au média.',
    build: 'Côté technique, Aracnet me permet de travailler les composants, le responsive, les performances, les métadonnées et la structure HTML en même temps que la partie éditoriale.',
    learnings: 'Aracnet m’a surtout appris à ne pas commencer par le design. Le contenu, la navigation et la façon dont les sujets sont classés changent directement la manière dont l’interface doit être construite.',
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
    preview: 'Avec CRAPH.fr, le besoin était différent : présenter les services de la structure sans perdre les visiteurs dans un vocabulaire trop technique, remettre de l’ordre dans les informations et améliorer la présence du site dans les recherches.',
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
    approach: 'J’ai organisé les pages autour des services, des informations pratiques et des moyens de contact. Le design reste volontairement sobre : sur ce type de site, le contenu doit passer avant l’effet visuel.',
    build: 'Le travail comprend l’organisation du contenu, l’intégration responsive, les ajustements graphiques et les bases SEO. Search Console me sert ensuite à vérifier ce que Google voit réellement du site.',
    learnings: 'CRAPH.fr m’a appris à travailler avec des demandes qui ne viennent pas de moi, à intégrer des retours parfois très concrets et à continuer d’intervenir sur un site après sa mise en ligne.',
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
    note: 'Passer d’un besoin à une interface compréhensible.',
    items: [
      { n: '04', icon: 'ux', title: 'UI / UX', desc: 'Parcours, structure de l’information, wireframes et micro-interactions.', tools: ['Parcours', 'Wireframes', 'Architecture', 'Prototypage'] },
      { n: '05', icon: 'brand', title: 'Identité numérique', desc: 'Faire tenir ensemble typographie, couleurs, iconographie et comportement.', tools: ['Direction visuelle', 'Brand UI', 'Design system', 'Iconographie'] },
    ],
  },
  {
    id: 'visibility',
    label: 'Rendre visible',
    note: 'Je pense au référencement pendant la construction du site, pas une fois qu’il est terminé.',
    items: [
      { n: '06', icon: 'seo', title: 'SEO technique', desc: 'Structure HTML, indexation, métadonnées et performance.', tools: ['Schema.org', 'Canonical', 'Sitemap', 'Search Console', 'Core Web Vitals'] },
      { n: '07', icon: 'shield', title: 'Qualité web', desc: 'Quelques réflexes de sécurité et de maintenance intégrés au projet.', tools: ['CSP', 'Headers HTTP', 'RLS', 'Validation', 'Git'] },
    ],
  },
  {
    id: 'explore',
    label: 'Explorer',
    note: 'Une partie que je commence à travailler avec ma formation.',
    items: [
      { n: '08', icon: 'firmware', title: 'Firmware — langage C', desc: 'Bases en C pour le firmware, logique de contrôle et premiers programmes sur microcontrôleurs.', tools: ['C', 'Microcontrôleurs', 'Entrées / sorties', 'Logique de contrôle'] },
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
