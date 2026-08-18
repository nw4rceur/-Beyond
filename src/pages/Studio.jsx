import React from 'react';
import { Link } from 'react-router-dom';

import Seo from '../components/Seo';
import Icon from '../components/Icon';
import AnimatedMedia from '../components/AnimatedMedia';
import Reveal from '../components/Reveal';

export default function Studio() {
  return (
    <>
      <Seo
        title="Vision"
        path="/studio"
        description="Beyond31 : la vision de Huriel Nguimbi autour de la progression, de la résilience et de projets numériques construits dans la durée."
      />

      <Reveal className="page-hero">
        <p className="eyebrow"><span />Pourquoi Beyond31</p>
        <h1>Le 31 est une limite.<br /><em>Pas une fin.</em></h1>
        <p>
          Le dernier jour du mois représente une frontière simple. Beyond31, c’est l’idée de continuer après :
          reprendre, apprendre, corriger et aller un peu plus loin que ce qu’on pensait suffisant.
        </p>
      </Reveal>

      <section className="vision-story">
        <Reveal as="article" className="glass-story interactive-glass"><Icon name="repeat" /><span>01</span><h2>Reprendre</h2><p>Une première version peut fonctionner et rester améliorable. Je préfère revenir dessus plutôt que la déclarer terminée trop vite.</p></Reveal>
        <Reveal as="article" className="glass-story interactive-glass" delay={0.06}><Icon name="compass" /><span>02</span><h2>Explorer</h2><p>Web, mobile, produit, SEO, électronique : la curiosité fait partie du parcours, sans prétendre maîtriser chaque domaine au même niveau.</p></Reveal>
        <Reveal as="article" className="glass-story interactive-glass" delay={0.12}><Icon name="check" /><span>03</span><h2>Tenir</h2><p>La résilience est moins spectaculaire qu’une idée brillante, mais elle construit davantage : corriger les bugs, refaire, documenter et continuer.</p></Reveal>
      </section>

      <Reveal className="founder">
        <div className="founder-photo interactive-glass">
          <AnimatedMedia src="/images/huriel.png" alt="Huriel Nguimbi" variant="portrait" />
          <div className="media-overlay" />
        </div>
        <div>
          <p className="eyebrow"><span />À propos</p>
          <h2></h2>
          <p>
            Beyond31 est aujourd’hui mon portfolio et le point commun entre les projets que je développe depuis Poitiers.
            Il est volontairement pensé pour pouvoir évoluer avec mon parcours et devenir, plus tard, quelque chose de plus structuré.
          </p>
          <Link className="glass-action" to="/contact">J’ai un projet</Link>
        </div>
      </Reveal>
    </>
  );
}
