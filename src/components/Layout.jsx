// Navigation commune à toutes les pages.

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import Icon from './Icon';

export function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Beyond31 — accueil">
      <img src="/images/beyond31_logo.png" alt="" />
      <span>Beyond31</span>
    </Link>
  );
}

const nav = [
  ['/', 'home', 'Accueil'],
  ['/projets', 'work', 'Projets'],
  ['/expertise', 'expertise', 'Compétences'],
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const next = latest > 26;
    setScrolled((current) => (current === next ? current : next));
  });

  return (
    <div className="shell">
      <motion.header className={`topbar${scrolled ? ' topbar--scrolled' : ''}`} animate={reduceMotion ? undefined : { y: 0 }}>
        <Logo />
        <nav className="nav-glass" aria-label="Navigation principale">
          {nav.map(([to, icon, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>
              <Icon name={icon} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <Link className="project-pill" to="/contact"><span>J’ai un projet</span><Icon name="arrow" size={15} /></Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Ouvrir la navigation">
          {open ? 'Fermer' : 'Menu'}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div className="menu-panel" initial={{ opacity: 0, y: -10, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.985 }} transition={{ duration: 0.24 }}>
            {[...nav, ['/contact', 'contact', 'J’ai un projet']].map(([to, icon, label]) => (
              <NavLink onClick={() => setOpen(false)} key={to} to={to}>
                <Icon name={icon}/><span>{label}</span><Icon name="arrow" size={15}/>
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      <footer className="footer page-shell">
        <div className="footer-main"><Logo/><span>© 2026 Huriel Nguimbi · Poitiers</span></div>
        <div className="footer-links">
          <Link to="/projets">Projets</Link>
          <Link to="/expertise">Compétences</Link>
          <Link to="/a-propos">Qui suis-je</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-meta">
          <a href="mailto:contact@beyond31.online">contact@beyond31.online</a>
          <a href="https://instagram.com/beyond_31_" target="_blank" rel="noopener noreferrer">Instagram</a>
          <div><Link to="/mentions-legales">Mentions légales</Link><Link to="/confidentialite">Confidentialité</Link></div>
        </div>
      </footer>
    </div>
  );
}
