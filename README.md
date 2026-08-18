# Beyond31 — V5.3 Motion

Cette version conserve la structure et le design de la V5.2. Le travail porte surtout sur le mouvement : donner plus de présence au site sans le transformer en démonstration d'effets.

## Lancer le projet

```bash
npm install
npm start
```

Avant une mise en ligne :

```bash
npm run build
npm run audit
```

## Organisation

```text
src/
├── components/
│   ├── AnimatedMedia.jsx   # parallaxe légère des images
│   ├── Reveal.jsx          # apparition des sections au scroll
│   ├── Signature31.jsx     # animation propre au nombre 31
│   └── ...
├── data/                   # projets et compétences
├── pages/                  # une page React par route
└── styles/                 # styles séparés par zone/page
```

## Images

Les visuels restent dans `public/images/` et utilisent leurs noms PNG :

- `beyond31-hero.png`
- `aracore-cover.png`
- `aracnet-cover.png`
- `craph-cover.png`
- `huriel.png`

Le hero est chargé en priorité. Les autres images restent en lazy-loading.

## Animations ajoutées

- le **31** possède l'animation signature du site : balayage blanc / bleu froid / jaune, lumière puis retour au calme ;
- l'effet se rejoue au survol du 31 ;
- les sections apparaissent doucement au scroll ;
- les images bougent légèrement avec le scroll ;
- Aracore, aracnet et CRAPH ont chacun une variation subtile du mouvement ;
- le header glass devient plus compact après le premier scroll ;
- les boutons, flèches, icônes et cartes ont des micro-interactions ;
- les changements de page utilisent une transition courte avec léger flou ;
- `prefers-reduced-motion` est respecté pour l'accessibilité.

## Choix volontaire

Il n'y a pas de smooth-scroll forcé, de curseur personnalisé, de particules, de 3D ou d'animations qui se déclenchent partout. Le seul effet réellement démonstratif reste le **31**.

## Sécurité / SEO

Les réglages SEO, Schema.org, sitemap et headers de sécurité de la V5.2 sont conservés.

Le fichier `public/_headers` fonctionne uniquement sur les hébergeurs qui lisent ce format. Si l'hébergement change, il faut recopier ces headers dans sa configuration réelle.

Ne jamais mettre de mot de passe, clé privée ou secret dans `src/` ou dans une variable React exposée au navigateur.
