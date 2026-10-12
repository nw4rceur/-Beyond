import React from 'react';
import Seo from '../components/MetadonneesSeo';
import Reveal from '../components/Apparition';
import GrilleProjets from '../components/GrilleProjets';

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
        <div className="project-category-head">
          <p className="eyebrow"><span />En dehors des cours</p>
          <h2>Projets personnels</h2>
          <p>Des idées que je développe, que je teste et que je fais évoluer au fil du temps.</p>
        </div>
        <GrilleProjets compact category="personnel" />
      </section>

      <section className="projects-hive-page page-shell academic-projects">
        <div className="project-category-head">
          <p className="eyebrow"><span />En cours</p>
          <h2>Projets universitaires</h2>
          <p>En construction. Les projets universitaires seront ajoutés ici lorsqu’ils seront suffisamment avancés pour être présentés.</p>
        </div>
        <div className="projects-coming-soon" role="status">
          <span className="projects-coming-soon-mark" aria-hidden="true">↗</span>
          <div>
            <strong>En construction</strong>
            <p>Cette rubrique sera complétée plus tard.</p>
          </div>
        </div>
      </section>
    </>
  );
}
