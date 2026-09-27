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
          <h1>Envie de rentrer<br/><em>en contact ?</em></h1>
          <p>Une idée, un projet ou simplement quelque chose à discuter autour du web et du produit : vous pouvez me contacter directement.</p>
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
