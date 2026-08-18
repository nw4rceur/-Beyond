import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Petite animation d'entrée réutilisable.
 * Le mouvement reste volontairement court pour ne pas ralentir la lecture.
 */
export default function Reveal({ children, className = '', delay = 0, amount = 0.18, as = 'div' }) {
  const reduceMotion = useReducedMotion();
  const motionTags = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
    header: motion.header,
    aside: motion.aside,
  };
  const MotionTag = motionTags[as] || motion.div;

  if (reduceMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
