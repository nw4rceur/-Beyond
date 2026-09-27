import React from 'react';

import Seo from '../components/Seo';
import Icon from '../components/Icon';
import AnimatedMedia from '../components/AnimatedMedia';
import Reveal from '../components/Reveal';
import { personalLinks } from '../data/site';

const timeline = [
  {
    year: '2024',
    title: 'Licence Sciences pour l’ingénieur',
    place: 'Université de Poitiers',
    detail: 'Première étape universitaire orientée sciences de l’ingénieur : mathématiques, physique, mécanique et premières notions liées aux systèmes techniques. Cette année m’a surtout donné un socle scientifique avant ma réorientation.'
  },
  {
    year: '2025',
    title: 'Licence Informatique',
    place: 'Université de Poitiers',
    detail: 'Réorientation vers l’informatique avec davantage d’algorithmique, de programmation, de logique et de développement. C’est pendant cette période que le web et les projets personnels prennent une place beaucoup plus importante dans mon travail.'
  },
  {
    year: '2026',
    title: 'BUT GEII',
    place: 'IUT de Poitiers',
    detail: 'Formation plus appliquée qui croise automatisme, informatique industrielle, électricité, énergie et programmation. J’y développe notamment mes bases en langage C et en firmware, tout en gardant le web comme terrain principal de projets personnels.'
  },
  {
    year: '2026 →',
    title: 'Beyond31',
    place: 'Projets personnels',
    detail: 'Aracore, Aracnet, CRAPH.fr et les projets qui suivront sont regroupés ici pour documenter leur construction et leur évolution.'
  },
]

const personalDescription = `Je m'appelle Huriel Nguimbi, j'ai 20 ans et j'étudie actuellement en BUT Génie électrique et informatique industrielle à Poitiers. Mon parcours a commencé par les sciences pour l'ingénieur, où j'ai découvert les bases scientifiques et techniques, avant une réorientation vers l'informatique qui m'a permis de renforcer la programmation, l'algorithmique et le développement.

Aujourd'hui, j'essaie surtout de relier ces différents terrains par des projets concrets. Beyond31 sert de vitrine à ce travail : Aracore, Aracnet, CRAPH.fr et les prochains projets me permettent d'apprendre en construisant, de mieux comprendre le produit, le web, le référencement et progressivement le firmware. En dehors des projets, la boxe occupe aussi une place importante dans mon quotidien ; j'ai notamment terminé 2e lors de la Nuit de la boxe universitaire 2025–2026.`;

const boxingPhotos = [
  '/images/about/boxe-94.jpg',
  '/images/about/boxe-65.jpg',
  '/images/about/boxe-64.jpg',
  '/images/about/boxe-62.jpg',
  '/images/about/boxe-41.jpg',
];

export default function About() {
  return (
    <>
      <Seo
        title="Qui suis-je — Huriel Nguimbi"
        path="/a-propos"
        description="Parcours de Huriel Nguimbi, créateur de Beyond31, et galerie personnelle."
        image="/images/about/huriel-portrait.jpeg"
        schemas={[{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Huriel Nguimbi',
          url: 'https://beyond31.online/a-propos',
          image: 'https://beyond31.online/images/about/huriel-portrait.jpeg',
        }]}
      />

      <section className="about-intro page-shell">
        <Reveal className="about-copy">
          <p className="eyebrow"><span />Qui suis-je</p>
          <h1>Huriel Nguimbi</h1>
          <div className="about-facts">
            <span>20 ans</span><span>Poitiers</span><span>Étudiant</span><span>Beyond31</span>
          </div>

          {personalDescription && (
            <p className="about-personal-description">{personalDescription}</p>
          )}

          <div className="about-links">
            {personalLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                <Icon name={link.icon} size={16} /> {link.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="about-portrait" delay={0.06}>
          <AnimatedMedia src="/images/about/huriel-portrait.jpeg" alt="Portrait de Huriel Nguimbi" priority variant="portrait" />
          <span className="about-portrait-caption">Huriel Nguimbi · Poitiers</span>
        </Reveal>
      </section>

      <section className="about-path page-shell">
        <Reveal className="about-path-copy">
          <p className="eyebrow"><span />Parcours</p>
          <h2>Quelques repères.</h2>
        </Reveal>

        <div className="timeline">
          {timeline.map((item, index) => (
            <Reveal className="timeline-row" key={`${item.year}-${item.title}`} delay={index * 0.035}>
              <span>{item.year}</span>
              <div className="timeline-title">
                <strong>{item.title}</strong>
                <small>{item.place}</small>
              </div>
              <p>{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="boxing-story page-shell">
        <Reveal className="boxing-copy">
          <p className="eyebrow"><span />Boxe</p>
          <h2>Nuit de la boxe · 2025–2026</h2>
          <p>Événement universitaire organisé autour de rencontres de boxe entre étudiants. J’y ai participé lors de la saison 2025–2026 et terminé à la 2e place. Les images ci-dessous gardent une trace de cette soirée et de ma pratique en dehors des projets numériques.</p>
        </Reveal>

        <div className="boxing-gallery">
          {boxingPhotos.map((src, index) => (
            <Reveal className={`boxing-gallery-item boxing-gallery-item--${index + 1}`} key={src} delay={(index % 3) * 0.04}>
              <img src={src} alt={`Nuit de la boxe — photo ${index + 1}`} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
