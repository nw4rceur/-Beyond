import React from 'react';
import { motion } from 'framer-motion';
import useLocalTime from '../hooks/useLocalTime';

const reveal = {
  hidden: { y: 26, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Hero() {
  const time = useLocalTime();

  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-meta">
        <span>Independent creative technology studio</span>
        <span>Poitiers · {time}</span>
      </div>

      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.09, delayChildren: 0.08 }}
      >
        <motion.p variants={reveal} className="kicker">Beyond31 / studio + produits</motion.p>
        <motion.h1 variants={reveal}>
          On construit des idées
          <span className="hero-accent"> qui méritent d’exister.</span>
        </motion.h1>
        <motion.div variants={reveal} className="hero-bottom">
          <p>
            Produit, design et technologie réunis dans un studio indépendant. Nos projets parlent avant nos services.
          </p>
          <a href="#work" className="round-link" aria-label="Voir les projets">
            <span>Voir<br />les projets</span>
            <b>↓</b>
          </a>
        </motion.div>
      </motion.div>

      <div className="hero-signal" aria-hidden="true">
        <span>31</span><i /><i /><i />
      </div>
    </section>
  );
}
