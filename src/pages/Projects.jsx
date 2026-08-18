import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

import Seo from '../components/Seo';
import Icon from '../components/Icon';
import AnimatedMedia from '../components/AnimatedMedia';
import Reveal from '../components/Reveal';
import { projects } from '../data/site';

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Seo
        title="Projets"
        path="/projets"
        description="Aracore, aracnet et CRAPH.fr : projets web et numériques présentés par Huriel Nguimbi sur Beyond31."
      />

      <Reveal className="page-hero">
        <p className="eyebrow"><span />Projets</p>
        <h1>Du concret,<br /><em>avec encore de la marge.</em></h1>
        <p>Chaque projet a son contexte, ses contraintes et ses défauts. C’est aussi ce qui permet au suivant d’être meilleur.</p>
      </Reveal>

      <section className="projects-gallery">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <Link to={`/projets/${project.slug}`} className={`gallery-project gallery-project--${project.slug}`}>
              <motion.div
                className={`gallery-media project-media--${project.slug} interactive-glass`}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <AnimatedMedia src={project.image} alt={project.name} variant={project.slug} />
                <div className="media-overlay" />
                <span className="gallery-index">0{index + 1}</span>
                <div className="gallery-glass">
                  <small>{project.kind} · {project.year}</small>
                  <h2>{project.name}</h2>
                  <p>{project.headline}</p>
                  <Icon name="arrow" />
                </div>
              </motion.div>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
