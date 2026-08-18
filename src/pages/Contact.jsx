import React from 'react';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

export default function Contact() {
  return (
    <>
      <Seo title="Contact" path="/contact" description="Contacter Huriel Nguimbi via Beyond31 pour parler d’un projet, d’une collaboration ou d’une idée."/>
      <section className="contact-page">
        <Reveal>
          <p className="eyebrow"><span/>J’ai un projet</p>
          <h1>Parlons de ce que<br/><em>tu veux construire.</em></h1>
          <p>Une idée déjà cadrée, un site à améliorer, un prototype ou simplement une question : envoie le contexte, même brièvement.</p>
        </Reveal>
        <Reveal className="contact-glass interactive-glass" delay={0.08}>
          <a href="mailto:contact@beyond31.online"><Icon name="mail"/><span><small>Email</small><strong>contact@beyond31.online</strong></span><Icon name="arrow"/></a>
          <a href="tel:+33625139627"><Icon name="phone"/><span><small>Téléphone</small><strong>+33 6 25 13 96 27</strong></span><Icon name="arrow"/></a>
          <a href="https://instagram.com/beyond_31_" target="_blank" rel="noopener noreferrer"><Icon name="instagram"/><span><small>Instagram</small><strong>@beyond_31_</strong></span><Icon name="external"/></a>
        </Reveal>
      </section>
    </>
  );
}
