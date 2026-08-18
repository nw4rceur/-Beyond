import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';

export default function NotFound() {
  return (
    <>
      <Seo title="Page introuvable" path="/404" noIndex />
      <section className="not-found">
        <p className="eyebrow"><span />404</p>
        <h1>Cette page est allée<br /><em>un peu trop loin.</em></h1>
        <p>Le lien a changé, ou la page n’existe plus. Le reste de Beyond31 est toujours là.</p>
        <Link className="primary-action" to="/">Retour à l’accueil <Icon name="arrow" /></Link>
      </section>
    </>
  );
}
