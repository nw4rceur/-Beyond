import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Mark from './Mark';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <Mark />
      <nav className="desktop-nav" aria-label="Navigation principale">
        <a href="#work">Projets</a>
        <a href="#studio">Studio</a>
        <a href="#capabilities">Savoir-faire</a>
        <a className="nav-contact" href="#contact">Parler d’un projet ↗</a>
      </nav>
      <button className="menu-button" type="button" onClick={() => setOpen((v) => !v)} aria-label="Ouvrir le menu" aria-expanded={open}>
        <span>{open ? 'Fermer' : 'Menu'}</span>
        <i className={open ? 'is-open' : ''} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            <a href="#work" onClick={close}>01 — Projets</a>
            <a href="#studio" onClick={close}>02 — Studio</a>
            <a href="#capabilities" onClick={close}>03 — Savoir-faire</a>
            <a href="#contact" onClick={close}>04 — Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
