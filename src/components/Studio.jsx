import React from 'react';
import { motion } from 'framer-motion';
import { capabilities } from '../data/projects';

export default function Studio() {
  return (
    <>
      <section className="studio-section" id="studio">
        <div className="section-label"><span>02</span> Le studio</div>
        <motion.div
          className="studio-statement"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.7 }}
        >
          <p className="studio-small">Beyond31 n’est pas une liste de prestations.</p>
          <h2>
            On expérimente sur nos propres produits.<br />
            <span>Cette exigence, on l’apporte ensuite aux autres.</span>
          </h2>
        </motion.div>

        <div className="principles">
          <article><span>01</span><h4>Construire avant de vendre.</h4><p>Les projets internes sont notre terrain d’essai : idée, interface, code, déploiement, usage réel.</p></article>
          <article><span>02</span><h4>Faire simple, pas simpliste.</h4><p>Moins d’effets pour impressionner. Plus de détails qui rendent une expérience évidente.</p></article>
          <article><span>03</span><h4>Rester curieux.</h4><p>Web, produit, identité ou embarqué : la technologie change, la logique reste la même — comprendre puis fabriquer.</p></article>
        </div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="section-label"><span>03</span> Savoir-faire</div>
        <div className="cap-list">
          {capabilities.map((item, i) => (
            <motion.div
              className="cap-item"
              key={item}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.035 }}
            >
              <span>{String(i + 1).padStart(2, '0')}</span><strong>{item}</strong><i>↗</i>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
