import React from 'react';

import Seo from '../components/Seo';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import { capabilityGroups, seoDetails } from '../data/site';

function CapabilityGroup({ group }) {
  return (
    <div className="expertise-group">
      <Reveal as="header" className="expertise-group-head">
        <span>{group.label}</span>
        <p>{group.note}</p>
      </Reveal>

      {group.items.map((capability, index) => (
        <Reveal as="article" className="expertise-row" key={capability.n} delay={index * 0.03}>
          <div className="expertise-icon"><Icon name={capability.icon} /></div>
          <div className="expertise-copy">
            <span>{capability.n}</span>
            <h2>{capability.title}</h2>
            <p>{capability.desc}</p>
          </div>
          <div className="tool-cloud">
            {capability.tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function SeoCard({ detail, delay }) {
  return (
    <Reveal as="article" className="seo-card interactive-glass" delay={delay}>
      <Icon name={detail.icon} />
      <h3>{detail.title}</h3>
      <p>{detail.text}</p>
    </Reveal>
  );
}

export default function Expertise() {
  return (
    <>
      <Seo
        title="Compétences"
        path="/expertise"
        description="Développement web, Flutter, Supabase, UI/UX, SEO technique et bases en firmware C utilisés dans les projets Beyond31."
      />

      <Reveal className="page-hero page-hero--compact page-shell">
        <p className="eyebrow"><span />Compétences clés</p>
        <h1>Ce que j’utilise aujourd’hui.</h1>
        <p>Les outils qui reviennent vraiment dans mes projets, plus quelques sujets que je commence à approfondir comme le firmware en C.</p>
      </Reveal>

      <section className="expertise-list">
        {capabilityGroups.map((group) => <CapabilityGroup key={group.id} group={group} />)}
      </section>

      <section className="seo-panel">
        <Reveal className="section-head">
          <div><p className="eyebrow"><span />SEO & qualité</p><h2>Le travail qu’on voit moins.</h2></div>
          <p>Une page propre ne suffit pas : il faut aussi qu’elle soit rapide, indexable et correctement configurée.</p>
        </Reveal>
        <div className="seo-grid">
          {seoDetails.map((detail, index) => <SeoCard key={detail.title} detail={detail} delay={(index % 4) * 0.04} />)}
        </div>
      </section>
    </>
  );
}
