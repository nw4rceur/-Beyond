import React from 'react';

function AracoreVisual() {
  return (
    <div className="product-stage product-stage--aracore" aria-label="Aperçu conceptuel Aracore">
      <div className="phone-shell">
        <div className="phone-bar"><span>9:41</span><span>● ● ●</span></div>
        <div className="aracore-logo">A</div>
        <p className="mini-label">Résidence Descartes</p>
        <h4>Votre laverie,<br />avant d’y aller.</h4>
        <div className="machine-row"><span>Lave-linge 01</span><b>Libre</b></div>
        <div className="machine-row occupied"><span>Sèche-linge 02</span><b>28 min</b></div>
        <div className="phone-tabs"><i /><i className="active" /><i /></div>
      </div>
      <div className="orbit-word">ARACORE · LAUNDRY · COMMUNITY ·</div>
    </div>
  );
}

function AracnetVisual() {
  return (
    <div className="product-stage product-stage--aracnet" aria-label="Aperçu conceptuel aracnet">
      <div className="news-top"><strong>aracnet</strong><span>EN DIRECT</span></div>
      <div className="news-rule" />
      <div className="news-display">CE QUI<br />SE PASSE<br /><em>VRAIMENT.</em></div>
      <div className="news-ticker"><span>Monde</span><span>Tech</span><span>Culture</span><span>Politique</span></div>
    </div>
  );
}

export default function ProjectVisual({ project }) {
  if (project.visual === 'aracore') return <AracoreVisual />;
  if (project.visual === 'aracnet') return <AracnetVisual />;

  return (
    <div className="product-stage product-stage--image">
      <img src={project.visual} alt={`Aperçu du projet ${project.name}`} />
      <div className="image-caption">Beyond31 × {project.name}</div>
    </div>
  );
}
