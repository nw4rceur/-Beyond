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
        description="Compétences de Huriel Nguimbi : React, JavaScript, Flutter, Supabase, UI/UX, SEO technique et firmware en langage C."
      />

      <Reveal className="page-hero page-hero--compact page-shell">
        <p className="eyebrow"><span />Compétences clés</p>
        <h1>Ce que j’utilise<br />aujourd’hui.</h1>
        <p>Des outils présents dans mes projets, avec une ouverture progressive vers le firmware en langage C.</p>
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
                  <span>{capability.n}</span>
                  <h2>{capability.title}</h2>
                  <p>{capability.desc}</p>
                </div>
                <div className="tool-cloud">{capability.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </Reveal>
            ))}
          </div>
        ))}
      </section>

      <section className="seo-panel">
        <Reveal className="section-head">
          <div><p className="eyebrow"><span />SEO & qualité</p><h2>Ce qui ne se voit pas immédiatement.</h2></div>
          <p>Indexation, performance et sécurité font partie du développement du site.</p>
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
