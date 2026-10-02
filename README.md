# Beyond31

Site de Beyond31.

Le projet est construit avec React et déployé sur Netlify. Il regroupe les pages projets, la présentation des compétences, la page « Qui suis-je » et les informations de contact.

## Lancer le site en local

```bash
npm install
npm start
```

Le build de production se fait avec :

```bash
npm run build
```

## Structure

```text
public/           fichiers servis tels quels, images et métadonnées
src/components/  composants réutilisés sur plusieurs pages
src/data/        contenu des projets et compétences
src/pages/       pages du site
src/styles/      styles séparés par zone
```

## Déploiement

Netlify utilise :

```text
Build command: npm run build
Publish directory: build
```

`node_modules/` et `build/` restent en local et ne sont pas versionnés.

## Domaine

https://beyond31.online
