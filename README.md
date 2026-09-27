# Beyond31 v6

Portfolio et vitrine de projets de Huriel Nguimbi.

## Lancer le projet

```bash
npm install
npm start
```

Build de production :

```bash
npm run build
```

## Organisation

- `src/pages/` : pages React.
- `src/components/` : composants communs.
- `src/data/site.js` : projets, compétences et liens. C'est le premier fichier à modifier pour faire évoluer le contenu.
- `src/styles/` : CSS séparé par zone/page.
- `public/images/` : visuels des projets, portrait et photos.

## Ajouter un réseau social à un projet

Dans `src/data/site.js`, ajouter une entrée dans `links` :

```js
{ label: 'Instagram', href: 'https://instagram.com/...', icon: 'instagram' }
```

Le bouton sera automatiquement affiché dans la fiche du projet.

## Images personnelles

Les photos utilisées dans la page À propos proviennent directement des fichiers fournis par Huriel. Aucune retouche artificielle du visage n'est appliquée ; le cadrage est géré en CSS.

## V7 — contenu personnel
La présentation personnelle n'est pas rédigée automatiquement.
Pour l'ajouter, ouvre `src/pages/About.jsx` et complète :

```js
const personalDescription = 'Ton texte ici';
```

Les photos personnelles utilisées par la page « Qui suis-je » sont dans `public/images/about/`.
