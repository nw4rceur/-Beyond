import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

import Seo from '../components/Seo';
import Icon from '../components/Icon';
import AnimatedMedia from '../components/AnimatedMedia';
import Reveal from '../components/Reveal';
import Signature31 from '../components/Signature31';
import { projects, capabilities } from '../data/site';

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Seo
        description="Beyond31 est le portfolio de Huriel Nguimbi : Aracore, aracnet, CRAPH.fr et des compétences en web, mobile, produit, SEO et systèmes embarqués."
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Huriel Nguimbi',
            url: 'https://beyond31.online',
            sameAs: ['https://instagram.com/beyond_31_'],
            knowsAbout: ['Web development', 'Flutter', 'Technical SEO', 'Product design', 'Embedded systems'],
          },
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

      <section className="home-hero">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow"><span />Portfolio</p>
          <h1>Aller plus loin<br /><em>que le < Signature31 /> .</em></h1>
          <p className="hero-lead">
            Beyond31 rassemble mes projets web, mobile et techniques. Certains sont déjà en ligne,
            d’autres continuent d’évoluer. Le principe reste le même : ne pas s’arrêter à la première version.
          </p>

          <div className="hero-actions">
            <Link className="primary-action" to="/projets">
              Voir mes projets <Icon name="arrow" />
            </Link>
            <Link className="glass-action" to="/contact">J’ai un projet</Link>
          </div>

          <div className="hero-facts">
            <span><Icon name="compass" /> Poitiers</span>
            <span><Icon name="repeat" /> Projets en évolution</span>
            <span><Icon name="seo" /> SEO technique</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-image glass-media interactive-glass"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.985, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatedMedia
            src="/images/beyond31-hero.png"
            alt="Visuel Beyond31"
            priority
            variant="hero"
          />
          <div className="media-overlay" />
          <div className="media-chip"><span className="status-dot" /><span>Beyond31 / 2026</span></div>
          <div className="media-caption">
            <strong>Une idée ne s’arrête pas quand elle fonctionne.</strong>
            <span>Elle peut encore être simplifiée, corrigée, poussée plus loin.</span>
          </div>
        </motion.div>
      </section>

      <section className="section project-showcase">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow"><span />Projets</p>
            <h2>Trois projets. Trois terrains.</h2>
          </div>
          <p>Je préfère montrer ce qui existe plutôt que multiplier les promesses.</p>
        </Reveal>

        <div className="project-stack">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <Link to={`/projets/${project.slug}`} className={`project-feature project-feature--${project.slug}`}>
                <motion.div
                  className={`project-media project-media--${project.slug} interactive-glass`}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AnimatedMedia src={project.image} alt={project.name} variant={project.slug} />
                  <div className="media-overlay" />
                  <div className="project-topline">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span>{project.kind}</span>
                  </div>
                  <div className="project-glass">
                    <div><small>{project.year}</small><strong>{project.name}</strong></div>
                    <Icon name="arrow" />
                  </div>
                </motion.div>

                <div className="project-copy">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.headline}</p>
                  </div>
                  <div className="project-tags">
                    {project.roles.slice(0, 3).map((role) => <span key={role}>{role}</span>)}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section skills-section">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow"><span />Compétences</p>
            <h2>Ce que je peux réellement mettre dans un projet.</h2>
          </div>
          <p>Du front-end au SEO, avec un pied dans le mobile et un apprentissage hardware lié au BUT GEII.</p>
        </Reveal>

        <div className="skills-grid">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.n} delay={(index % 2) * 0.06}>
              <Link className="skill-card interactive-glass" to="/expertise">
                <div className="skill-icon"><Icon name={capability.icon} /></div>
                <div>
                  <span>{capability.level}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.tools.slice(0, 4).join(' · ')}</p>
                </div>
                <Icon name="arrow" size={15} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="project-cta glass-wide interactive-glass">
        <div>
          <p className="eyebrow"><span />Un besoin, une idée</p>
          <h2>On peut commencer par en parler.</h2>
          <p>Site, interface, prototype, amélioration d’un projet existant ou simple échange technique.</p>
        </div>
        <Link className="primary-action" to="/contact">J’ai un projet <Icon name="arrow" /></Link>
      </Reveal>
    </>
  );
}
