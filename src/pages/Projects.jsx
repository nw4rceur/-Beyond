import React from 'react';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import ProjectHive from '../components/ProjectHive';

export default function Projects() {
  return (
    <>
      <Seo
        title="Projets"
        path="/projets"
        description="Aracore, Aracnet et CRAPH.fr : les projets présentés sur Beyond31."
      />

      <Reveal className="page-hero page-hero--compact page-shell">
        <p className="eyebrow"><span />Projets</p>
        <h1>Mes projets.</h1>
        <p>Chaque projet part d’un besoin différent. Le résumé donne l’essentiel ; la fiche détaille le contexte, les choix et ce que le projet m’a appris.</p>
      </Reveal>

      <section className="projects-hive-page page-shell">
        <ProjectHive compact />
      </section>
    </>
  );
}
