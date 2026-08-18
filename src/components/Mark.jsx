import React from 'react';

export default function Mark({ compact = false }) {
  return (
    <a className={`mark ${compact ? 'mark--compact' : ''}`} href="#top" aria-label="Beyond31 — accueil">
      <img src="/images/beyond31_logo.png" alt="" />
      <span>Beyond31</span>
    </a>
  );
}
