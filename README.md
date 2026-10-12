# Beyond31

Version de correction : **2**. Cette version rétablit l’import du composant `GrilleProjets` sur la page des projets.

Beyond31 est le site qui rassemble mes projets personnels, mes travaux universitaires et les compétences que je développe en les réalisant.

## Démarrer le site

Il faut Node.js 18, 20 ou 22 et npm. Depuis le dossier du projet :

```bash
npm install
npm start
```

Le site s’ouvre ensuite sur l’adresse locale indiquée par React.

## Vérifier avant de publier

```bash
npm test -- --watchAll=false
npm run build
```

La commande de compilation crée le dossier `build/`. Ce dossier est généré automatiquement et ne doit pas être envoyé sur GitHub.

## Organisation du code

```text
public/                 Images, icônes, métadonnées et fichiers servis tels quels
src/
  components/           Éléments réutilisés sur plusieurs pages
  data/contenu-site.js  Contenu des projets et des compétences
  pages/                Pages du site
  styles/               Styles regroupés par partie du site
```

Les noms des pages et des feuilles de style propres au site sont en français. Les composants techniques courants gardent des noms courts et explicites. Les commentaires sont réservés aux choix qui méritent une explication, plutôt qu’à la répétition du code.

## Déploiement Netlify

- Commande de build : `npm run build`
- Dossier à publier : `build`
- Version Node conseillée : 20

`node_modules/`, `build/` et les fichiers locaux ne doivent pas être suivis par Git. Après une installation réussie, conserve le `package-lock.json` généré par npm dans le dépôt afin de figer les versions installées.

## Site

https://beyond31.online
