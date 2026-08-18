import React from 'react';
import { motion } from 'framer-motion';
import ProjectVisual from './ProjectVisual';

export default function ProjectRow({ project }) {
  return (
    <motion.article
      className="project-row"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-copy">
        <div className="project-index">{project.index}</div>
        <div>
          <p className="eyebrow">{project.eyebrow}</p>
          <h3>{project.name}</h3>
          <p className="project-line">{project.line}</p>
          <p className="project-description">{project.description}</p>
          <div className="project-role">{project.role.map((role) => <span key={role}>{role}</span>)}</div>
          <a className="text-link" href={project.href} target="_blank" rel="noreferrer">Voir le projet <span>↗</span></a>
        </div>
      </div>
      <a className="project-visual-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Ouvrir ${project.name}`}>
        <ProjectVisual project={project} />
      </a>
    </motion.article>
  );
}
