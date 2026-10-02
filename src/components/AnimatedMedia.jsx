import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import MediaImage from './MediaImage';

export default function AnimatedMedia({ src, alt, priority = false, variant = 'default' }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 1], variant === 'aracore' ? [18, -18] : [10, -10]);
  const x = useTransform(scrollYProgress, [0, 1], variant === 'aracnet' ? [-12, 12] : [0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], variant === 'craph' ? [1.06, 1.015] : [1.04, 1.015]);

  const style = reduceMotion ? undefined : { x, y, scale };

  return (
    <motion.div ref={ref} className={`motion-media-layer motion-media-layer--${variant}`} style={style}>
      <MediaImage src={src} alt={alt} className="media-photo" priority={priority} />
    </motion.div>
  );
}
