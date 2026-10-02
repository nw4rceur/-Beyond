import React from 'react';
import Seo from '../components/Seo';

export function Legal() {
  return (
    <>
      <Seo title="Mentions légales" path="/mentions-legales" description="Mentions légales du site Beyond31." />
      <section className="legal-page">
        <p className="mono">MENTIONS LÉGALES</p>
        <h1>Informations du site</h1>

        <h2>Éditeur</h2>
        <p>Beyond31 est édité par <strong>Huriel Nguimbi</strong>, à Poitiers, France.</p>
        <p>Contact : <a href="mailto:contact@beyond31.online">contact@beyond31.online</a></p>

        <h2>Responsable de publication</h2>
        <p>Huriel Nguimbi.</p>

        <h2>Hébergement</h2>
        <p>Les coordonnées complètes de l’hébergeur seront ajoutées ici avec les informations de production du site.</p>

        <h2>Propriété intellectuelle</h2>
        <p>Sauf mention contraire, les contenus et créations originales présentés sur Beyond31 sont protégés. Les marques, logos et contenus de tiers restent la propriété de leurs titulaires.</p>
      </section>
    </>
  );
}

export function Privacy() {
  return (
    <>
      <Seo title="Confidentialité" path="/confidentialite" description="Politique de confidentialité du site Beyond31." />
      <section className="legal-page">
        <p className="mono">CONFIDENTIALITÉ</p>
        <h1>Le minimum de données.</h1>
        <p>Beyond31 est un site de présentation. Il ne demande pas de compte et n’utilise pas de formulaire de contact dans cette version.</p>

        <h2>Contact</h2>
        <p>Les liens vers l’email, le téléphone ou les réseaux sociaux ouvrent les services concernés, qui appliquent leurs propres conditions.</p>

        <h2>Mesure d’audience</h2>
        <p>Aucun outil d’analyse nécessitant un consentement n’est prévu dans cette version.</p>

        <h2>Sécurité</h2>
        <p>Le site applique des en-têtes de sécurité côté hébergement et limite les ressources externes autorisées.</p>
      </section>
    </>
  );
}
