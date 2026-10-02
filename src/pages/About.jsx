import React from 'react';

import Seo from '../components/Seo';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import { personalLinks } from '../data/site';

const bio = `Je m'appelle Huriel Nguimbi, j'ai 20 ans et j'étudie à Poitiers. Mon parcours universitaire a commencé en licence Sciences pour l'ingénieur, avec des mathématiques, de la physique, de la mécanique et une première approche des systèmes techniques. Je me suis ensuite réorienté en informatique, où j'ai davantage travaillé l'algorithmique, la programmation et le développement. Aujourd'hui, je poursuis en BUT Génie électrique et informatique industrielle, avec de l'automatisme, de l'informatique industrielle, de l'électricité et du langage C.

Le web est resté mon terrain principal. J'y apprends surtout en construisant : Aracore m'oblige à penser produit et usage, Aracnet me fait travailler l'éditorial et l'interface, et CRAPH.fr m'a confronté à un site destiné à une structure réelle. Beyond31 rassemble ces projets et me permet de garder une trace de leur évolution.`;

function AboutIntro() {
  return (
    <section className="about-intro page-shell">
      <Reveal className="about-copy">
        <p className="eyebrow"><span />Qui suis-je</p>
        <h1>Huriel Nguimbi</h1>
        <div className="about-facts">
          <span>20 ans</span>
          <span>Poitiers</span>
          <span>Étudiant</span>
          <span>Créateur de Beyond31</span>
        </div>
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
