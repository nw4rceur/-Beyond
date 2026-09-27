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
        description="Aracore, Aracnet et CRAPH.fr : projets de Huriel Nguimbi, avec leurs choix de conception, technologies et cahiers des charges."
      />

      <Reveal className="page-hero page-hero--compact page-shell">
        <p className="eyebrow"><span />Projets</p>
        <h1>Mes projets.</h1>
        <p>Sélectionnez un projet pour afficher son résumé, puis ouvrez sa fiche pour voir le contexte, le cahier des charges et les technologies utilisées.</p>
      </Reveal>

      <section className="projects-hive-page page-shell">
        <ProjectHive compact />
      </section>
    </>
  );
}
