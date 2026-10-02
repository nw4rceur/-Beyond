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

function makeSchemas(project) {
  const path = `/projets/${project.slug}`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': project.slug === 'aracore' ? 'SoftwareApplication' : 'CreativeWork',
      name: project.name,
      description: project.intro,
      url: `${SITE_URL}${path}`,
      image: `${SITE_URL}${project.image}`,
      creator: { '@type': 'Person', name: 'Huriel Nguimbi', url: `${SITE_URL}/a-propos` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Projets', item: `${SITE_URL}/projets` },
        { '@type': 'ListItem', position: 3, name: project.name, item: `${SITE_URL}${path}` },
      ],
    },
  ];
}

function ProjectHero({ project }) {
  return (
    <section className="project-detail-hero">
      <Reveal className="project-detail-copy">
        <Breadcrumbs items={[{ label: 'Accueil', path: '/' }, { label: 'Projets', path: '/projets' }, { label: project.name }]} />
        <p className="eyebrow"><span />{project.kind} · {project.year}</p>
        <h1>{project.name}</h1>
        <p>{project.headline}</p>
        <div className="project-facts">
          <div><small>État</small><strong>{project.status}</strong></div>
          <div><small>Rôle</small><strong>{project.roles.join(' · ')}</strong></div>
        </div>
      </Reveal>

      <Reveal className={`project-detail-visual project-media--${project.slug} interactive-glass`} delay={0.08}>
        <AnimatedMedia src={project.image} alt={`Aperçu du projet ${project.name}`} priority variant={project.slug} />
        <div className="media-overlay" />
        <div className="detail-glass"><span>{project.status}</span><span>{project.stack[0]}</span></div>
      </Reveal>
    </section>
  );
}

function Brief({ items }) {
  return (
    <div className="brief-grid">
      {items.map((item, index) => (
        <div key={item}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="project-follow-links">
      {project.links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="glass-action">
          <Icon name={link.icon} size={15} /> {link.label}
        </a>
      ))}
      <Link className="glass-action" to="/contact"><Icon name="mail" size={15} /> En parler</Link>
    </div>
  );
}

function CaseStudy({ project }) {
  return (
    <section className="case-study">
      <aside className="case-nav">
        <span>Étude de cas</span>
        <a href="#point-depart">01 Point de départ</a>
        <a href="#cahier">02 Cahier des charges</a>
        <a href="#approche">03 Approche</a>
        <a href="#tech">04 Technologies</a>
        <a href="#apports">05 Ce que ça m’a apporté</a>
      </aside>

      <article className="case-content">
        <Reveal as="section" id="point-depart" className="case-section case-section--lead">
          <small>01 — Point de départ</small>
          <h2>{project.challenge}</h2>
          <p>{project.intro}</p>
        </Reveal>

        <Reveal as="section" id="cahier" className="case-section">
          <small>02 — Cahier des charges</small>
          <h2>Ce que la première version devait résoudre.</h2>
          <Brief items={project.brief} />
        </Reveal>

        <Reveal as="section" id="approche" className="case-section">
          <small>03 — Approche</small>
          <h2>{project.approach}</h2>
          <p>{project.build}</p>
        </Reveal>

        <Reveal as="section" id="tech" className="case-section">
          <small>04 — Technologies utilisées</small>
          <div className="stack-display">
            {project.stack.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </Reveal>

        <Reveal as="section" id="apports" className="case-section case-section--learning">
          <small>05 — Ce que ce projet m’a apporté</small>
          <blockquote>{project.learnings}</blockquote>
        </Reveal>

        <Reveal as="section" className="case-section project-follow">
          <small>Suivre le projet</small>
          <ProjectLinks project={project} />
        </Reveal>
      </article>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <NotFound />;

  const path = `/projets/${project.slug}`;

  return (
    <>
      <Seo title={project.name} path={path} description={project.intro} type="article" image={project.image} schemas={makeSchemas(project)} />
      <ProjectHero project={project} />
      <CaseStudy project={project} />
      <section className="case-next">
        <Link to="/projets">← Tous les projets</Link>
        <Link to="/contact">J’ai un projet <Icon name="arrow" size={15} /></Link>
      </section>
    </>
  );
}
