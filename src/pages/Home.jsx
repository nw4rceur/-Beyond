import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

import Seo from '../components/Seo';
import Icon from '../components/Icon';
import AnimatedMedia from '../components/AnimatedMedia';
import Reveal from '../components/Reveal';
import ProjectHive from '../components/ProjectHive';
import { capabilityGroups } from '../data/site';

function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="home-hero home-shell">
      <motion.div
        className="hero-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow"><span />Beyond31</p>
        <h1>Rêvons toute l’année, <em>même après le 31.</em></h1>
        <p className="hero-lead">
          Beyond31 rassemble les projets que je construis vraiment. J'y montre ce qui fonctionne, ce qui change et ce que j'apprends en chemin.
        </p>
        <div className="hero-actions">
          <Link className="primary-action" to="/projets">Mes projets <Icon name="arrow" /></Link>
          <Link className="glass-action" to="/contact">J’ai un projet</Link>
        </div>
      </motion.div>

      <motion.div
        className="hero-image glass-media interactive-glass"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.04 }}
      >
        <AnimatedMedia src="/images/beyond31-hero.png" alt="Univers Beyond31" priority variant="hero" />
        <div className="media-overlay" />
        <div className="media-chip"><span className="status-dot" /><span>Poitiers · France</span></div>
      </motion.div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="projects-home home-shell">
      <Reveal className="compact-section-head">
        <div>
          <p className="eyebrow"><span />Projets</p>
          <h2>Mes projets</h2>
        </div>
        <Link className="text-link" to="/projets">Tout voir <Icon name="arrow" size={14} /></Link>
      </Reveal>
      <ProjectHive />
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="skills-home home-shell">
      <Reveal className="compact-section-head">
        <div>
          <p className="eyebrow"><span />Compétences clés</p>
          <h2>Ce que j’utilise.</h2>
        </div>
        <Link className="text-link" to="/expertise">Voir le détail <Icon name="arrow" size={14} /></Link>
      </Reveal>

      <div className="skill-board">
        {capabilityGroups.map((group) => (
          <Reveal className="skill-cluster glass-card" key={group.id}>
            <span className="skill-cluster-label">{group.label}</span>
            <div className="skill-cluster-items">
              {group.items.map((item) => (
                <div className="skill-mini" key={item.n}>
                  <Icon name={item.icon} size={18} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.tools.slice(0, 4).join(' · ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <Reveal className="project-cta glass-wide interactive-glass home-shell">
      <div>
        <p className="eyebrow"><span />Contact</p>
        <h2>Envie de parler d’un projet ?</h2>
        <p>Une idée, un besoin ou simplement une discussion autour du web et du produit.</p>
      </div>
      <Link className="primary-action" to="/contact">J’ai un projet <Icon name="arrow" /></Link>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        description="Beyond31 présente Aracore, Aracnet et CRAPH.fr, ainsi que les compétences utilisées pour les faire évoluer."
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Beyond31',
            url: 'https://beyond31.online',
            inLanguage: 'fr-FR',
            creator: { '@type': 'Person', name: 'Huriel Nguimbi' },
          },
        ]}
      />
      <HomeHero />
      <ProjectsSection />
      <SkillsSection />
      <ContactStrip />
    </>
  );
}
