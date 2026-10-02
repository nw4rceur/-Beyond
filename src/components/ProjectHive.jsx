import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Icon from './Icon';
import { projects } from '../data/site';

function ProjectCard({ project, index, active, onSelect }) {
  return (
    <button
      type="button"
      className={`project-collage-card project-collage-card--${index + 1}${active ? ' is-active' : ''}`}
      onClick={() => onSelect(project.slug)}
      aria-pressed={active}
      aria-label={`Afficher le résumé de ${project.name}`}
    >
      <img src={project.image} alt={`Aperçu du projet ${project.name}`} loading="lazy" />
      <span className="project-collage-shade" />
      <span className="project-collage-caption">
        <span className="project-collage-caption-main">
          <small>{project.kind}</small>
          <strong>{project.name}</strong>
        </span>
        <span className="project-collage-status">{project.status}</span>
      </span>
    </button>
  );
}

function ProjectSummary({ project }) {
  return (
    <div className="project-collage-summary glass-card" aria-live="polite">
      <div className="project-collage-summary-copy">
        <span className="hive-kicker">{project.status}</span>
        <h3>{project.name}</h3>
        <p>{project.preview || project.intro}</p>
      </div>
      <div className="project-collage-summary-side">
        <div className="project-tags">
          {project.stack.slice(0, 5).map((tool) => <span key={tool}>{tool}</span>)}
        </div>
        <Link className="text-link" to={`/projets/${project.slug}`}>
          Voir le projet <Icon name="arrow" size={14} />
        </Link>
      </div>
    </div>
  );
}

export default function ProjectHive({ compact = false }) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug);
  const activeProject = projects.find((project) => project.slug === activeSlug) || projects[0];

  if (!activeProject) return null;

  return (
    <div className={`project-collage${compact ? ' project-collage--compact' : ''}`}>
      <div className="project-collage-grid" aria-label="Sélection de projets">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            active={activeProject.slug === project.slug}
            onSelect={setActiveSlug}
          />
        ))}
      </div>
      <ProjectSummary project={activeProject} />
    </div>
  );
}
