import React from 'react';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import { capabilityGroups, seoDetails } from '../data/site';

export default function Expertise() {
  return (
    <>
      <Seo
        title="Compétences"
        path="/expertise"
        description="Compétences de Huriel Nguimbi via Beyond31 : React, Flutter, Supabase, UX, SEO technique, sécurité web et électronique de niveau BUT GEII."
      />

      <Reveal className="page-hero">
        <p className="eyebrow"><span />Compétences</p>
        <h1>Ce que je pratique,<br /><em>et jusqu’où.</em></h1>
        <p>Les niveaux sont volontairement visibles. Tout mettre au même rang serait moins utile que dire clairement ce que j’utilise déjà et ce que j’approfondis.</p>
      </Reveal>

      <section className="expertise-list">
        {capabilityGroups.map((group) => (
          <div className="expertise-group" key={group.id}>
            <Reveal as="header" className="expertise-group-head">
              <span>{group.label}</span>
              <p>{group.note}</p>
            </Reveal>

            {group.items.map((capability, index) => (
              <Reveal as="article" className="expertise-row" key={capability.n} delay={index * 0.035}>
                <div className="expertise-icon"><Icon name={capability.icon} /></div>
                <div className="expertise-copy">
                  <span>{capability.level}</span>
                  <h2>{capability.title}</h2>
                  <p>{capability.desc}</p>
                </div>
                <div className="tool-cloud">
                  {capability.tools.map((tool) => <span key={tool}>{tool}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        ))}
      </section>

      <section className="seo-panel">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow"><span />SEO & qualité</p>
            <h2>Le travail continue derrière l’interface.</h2>
          </div>
          <p>Le référencement, la performance et la sécurité sont traités pendant le développement, pas ajoutés après coup.</p>
        </Reveal>
        <div className="seo-grid">
          {seoDetails.map((detail, index) => (
            <Reveal as="article" className="seo-card interactive-glass" key={detail.title} delay={(index % 4) * 0.045}>
              <Icon name={detail.icon} />
              <h3>{detail.title}</h3>
              <p>{detail.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
