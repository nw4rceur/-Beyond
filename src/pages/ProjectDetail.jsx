import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Seo from '../components/Seo';
import Icon from '../components/Icon';
import AnimatedMedia from '../components/AnimatedMedia';
import Reveal from '../components/Reveal';
import Breadcrumbs from '../components/Breadcrumbs';
import NotFound from './NotFound';
import { projects } from '../data/site';

const SITE_URL = 'https://beyond31.online';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <NotFound />;

  const projectPath = `/projets/${project.slug}`;
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': project.slug === 'aracore' ? 'SoftwareApplication' : 'CreativeWork',
    name: project.name,
    description: project.intro,
    url: `${SITE_URL}${projectPath}`,
    image: `${SITE_URL}${project.image}`,
    creator: { '@type': 'Person', name: 'Huriel Nguimbi', url: SITE_URL },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Projets', item: `${SITE_URL}/projets` },
      { '@type': 'ListItem', position: 3, name: project.name, item: `${SITE_URL}${projectPath}` },
    ],
  };

  return (
    <>
      <Seo title={project.name} path={projectPath} description={project.intro} type="article" image={project.image} schemas={[projectSchema, breadcrumbSchema]} />

      <section className="project-detail-hero">
        <Reveal className="project-detail-copy">
          <Breadcrumbs items={[{ label: 'Accueil', path: '/' }, { label: 'Projets', path: '/projets' }, { label: project.name }]} />
          <p className="eyebrow"><span />{project.kind} · {project.year}</p>
          <h1>{project.name}</h1>
          <p>{project.headline}</p>
          <div className="hero-actions">
            <a className="primary-action" href={project.url} target="_blank" rel="noopener noreferrer">Voir le projet <Icon name="external" /></a>
            <Link className="glass-action" to="/contact">J’ai un projet</Link>
          </div>
        </Reveal>

        <Reveal className={`project-detail-visual project-media--${project.slug} interactive-glass`} delay={0.08}>
          <AnimatedMedia src={project.image} alt={`Aperçu du projet ${project.name}`} priority variant={project.slug} />
          <div className="media-overlay" />
          <div className="detail-glass"><span>{project.status}</span><span>{project.stack[0]}</span></div>
        </Reveal>
      </section>

      <section className="project-detail-body">
        <Reveal as="aside" className="glass-card interactive-glass">
          <div><p>État</p><span>{project.status}</span></div>
          <div><p>Rôle</p>{project.roles.map((role) => <span key={role}>{role}</span>)}</div>
          <div><p>Technologies</p>{project.stack.map((tool) => <span key={tool}>{tool}</span>)}</div>
        </Reveal>

        <article>
          <Reveal><small>01 — Point de départ</small><h2>{project.challenge}</h2></Reveal>
          <Reveal delay={0.03}><small>02 — Approche</small><p>{project.approach}</p></Reveal>
          <Reveal delay={0.03}><small>03 — Construction</small><p>{project.build}</p></Reveal>
          <Reveal delay={0.03}><small>04 — Contraintes utiles</small><ul className="case-constraints">{project.constraints.map((constraint) => <li key={constraint}>{constraint}</li>)}</ul></Reveal>
          <Reveal delay={0.03}><small>05 — Ce que le projet m’apprend</small><p>{project.learnings}</p></Reveal>
        </article>
      </section>

      <section className="case-next">
        <Link to="/projets">← Tous les projets</Link>
        <Link to="/contact">J’ai un projet <Icon name="arrow" size={15} /></Link>
      </section>
    </>
  );
}
