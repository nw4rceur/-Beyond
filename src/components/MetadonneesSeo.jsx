import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://beyond31.online';

export default function Seo({
  title,
  description,
  path = '/',
  type = 'website',
  image = '/images/beyond31_logo.png',
  schemas = [],
  noIndex = false,
}) {
  const canonical = `${SITE_URL}${path}`;
  const fullTitle = title ? `${title} — Beyond31` : 'Beyond31';
  const desc = description || 'Beyond31 rassemble des projets numériques en développement : Aracore, Aracnet et CRAPH.fr.';
  const socialImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const schemaList = Array.isArray(schemas) ? schemas : [schemas].filter(Boolean);

  return (
    <Helmet>
      <html lang="fr" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large'} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Beyond31" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={title ? `${title} — Beyond31` : 'Beyond31'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={socialImage} />

      {schemaList.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
