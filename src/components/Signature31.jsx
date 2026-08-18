import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Animation signature du "31".
 * L'effet reste volontairement court pour garder le site élégant.
 */
export default function Signature31() {
  const reduceMotion = useReducedMotion();

  return (
      <motion.span
          className="signature-31"
          data-text="31"
          initial={reduceMotion ? false : { scale: 0.96, opacity: 0.35 }}
          animate={
            reduceMotion
                ? undefined
                : {
                  scale: [0.96, 1.035, 1],
                  opacity: 1,
                }
          }
          transition={{
            duration: 1.15,
            delay: 0.48,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={
            reduceMotion
                ? undefined
                : {
                  scale: 1.045,
                  transition: { duration: 0.22 },
                }
          }
          aria-label="31"
      >
        31
      </motion.span>
  );
}