import React from 'react';
import { Link } from 'react-router-dom';

/** Fil d’Ariane visible sur les pages profondes et réutilisé dans le SEO. */
export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Fil d’Ariane">
      {items.map((item, index) => (
        <React.Fragment key={item.path || item.label}>
          {index > 0 && <span aria-hidden="true">/</span>}
          {item.path ? <Link to={item.path}>{item.label}</Link> : <span>{item.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}
