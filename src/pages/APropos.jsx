import React from 'react';

import Seo from '../components/MetadonneesSeo';
import Icon from '../components/Icone';
import Reveal from '../components/Apparition';
import { personalLinks } from '../data/contenu-site';

const bio = `Je m'appelle Huriel Nguimbi, j'ai 20 ans et j'étudie à Poitiers.

Mon parcours universitaire a commencé en licence Sciences pour l'ingénieur, où j'ai découvert les mathématiques, la physique, la mécanique et les systèmes techniques. Je me suis ensuite réorienté vers l'informatique, avec davantage d'algorithmique, de programmation et de développement.

Aujourd'hui, je poursuis mon parcours en BUT Génie électrique et informatique industrielle. J'y retrouve notamment l'automatisme, l'électricité, l'informatique industrielle et le langage C.

En parallèle de mes études, je construis mes propres projets et j'expérimente beaucoup par la pratique. Aracore, Aracnet et CRAPH.fr sont trois projets très différents qui me permettent chacun d'apprendre quelque chose de nouveau.`;

function AboutIntro() {
  return (
    <section className="about-intro page-shell">
      <Reveal className="about-copy">
        <p className="eyebrow"><span />Qui suis-je</p>
        <h1>Huriel Nguimbi</h1>
        <p className="about-personal-description">{bio}</p>
        <div className="about-links">
          {personalLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              <Icon name={link.icon} size={16} />
              {link.label}
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal className="about-portrait" delay={0.05}>
        <img src="/images/about/huriel-portrait.jpeg" alt="Portrait de Huriel Nguimbi" />
      </Reveal>
    </section>
  );
}

function BoxingActivity() {
  return (
    <section className="activity-section page-shell">
      <Reveal className="activity-photo">
        <img src="/images/about/boxe-activity.jpg" alt="Nuit de la boxe universitaire à Poitiers" loading="lazy" />
      </Reveal>

      <Reveal className="activity-copy" delay={0.05}>
        <p className="eyebrow"><span />Activité</p>
        <h2>Nuit de la boxe · 2025–2026</h2>
        <p>
          La Nuit de la boxe est un événement universitaire organisé à Poitiers autour de rencontres entre étudiants. J'y ai participé pendant la saison 2025–2026 et j'ai terminé à la deuxième place.
        </p>
        <p>
          La boxe occupe une place à part dans mon quotidien. C'est un cadre très différent des projets numériques : tout est plus direct, il faut répéter, s'adapter et rester lucide quand le rythme monte.
        </p>
      </Reveal>
    </section>
  );
}

export default function About() {
  return (
    <>
      <Seo
        title="Qui suis-je — Huriel Nguimbi"
        path="/a-propos"
        description="Parcours de Huriel Nguimbi, créateur de Beyond31."
        image="/images/about/huriel-portrait.jpeg"
        schemas={[{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Huriel Nguimbi',
          url: 'https://beyond31.online/a-propos',
          image: 'https://beyond31.online/images/about/huriel-portrait.jpeg',
        }]}
      />
      <AboutIntro />
      <BoxingActivity />
    </>
  );
}
