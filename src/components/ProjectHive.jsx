import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { projects } from '../data/site';

/*
 * Les projets sont volontairement disposés comme un petit collage.
 * La grille reste structurée, mais les formats varient pour éviter l'effet catalogue.
 */
export default function ProjectHive({ compact = false }) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug);
  const active = projects.find((project) => project.slug === activeSlug) || projects[0];

  if (!active) return null;

  return (
    <div className={`project-collage${compact ? ' project-collage--compact' : ''}`}>
      <div className="project-collage-grid" aria-label="Sélection de projets">
        {projects.map((project, index) => (
          <button
            type="button"
            key={project.slug}
            className={`project-collage-card project-collage-card--${index + 1}${active.slug === project.slug ? ' is-active' : ''}`}
            onClick={() => setActiveSlug(project.slug)}
            aria-pressed={active.slug === project.slug}
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
        ))}
      </div>

      <div className="project-collage-summary glass-card" aria-live="polite">
        <div className="project-collage-summary-copy">
          <span className="hive-kicker">{active.status}</span>
          <h3>{active.name}</h3>
          <p>{active.preview || active.intro}</p>
        </div>

        <div className="project-collage-summary-side">
          <div className="project-tags">
            {active.stack.slice(0, 5).map((tool) => <span key={tool}>{tool}</span>)}
          </div>
          <Link className="text-link" to={`/projets/${active.slug}`}>
            Voir le projet <Icon name="arrow" size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
