import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';

import Icon from './Icon';

const navigation = [
  ['/', 'home', 'Accueil'],
  ['/projets', 'work', 'Projets'],
  ['/expertise', 'expertise', 'Compétences'],
];

export function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Beyond31 — accueil">
      <img src="/images/beyond31_logo.png" alt="" />
      <span>Beyond31</span>
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav className="nav-glass" aria-label="Navigation principale">
      {navigation.map(([to, icon, label]) => (
        <NavLink key={to} to={to} end={to === '/'}>
          <Icon name={icon} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

function MobileMenu({ open, close }) {
  if (!open) return null;

  const links = [...navigation, ['/contact', 'contact', 'J’ai un projet']];

  return (
    <motion.div
      className="menu-panel"
      initial={{ opacity: 0, y: -8, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.99 }}
      transition={{ duration: 0.2 }}
    >
      {links.map(([to, icon, label]) => (
        <NavLink onClick={close} key={to} to={to}>
          <Icon name={icon} />
          <span>{label}</span>
          <Icon name="arrow" size={15} />
        </NavLink>
      ))}
    </motion.div>
  );
}

function SiteFooter() {
  return (
    <footer className="footer page-shell">
      <div className="footer-main">
        <Logo />
        <span>© 2026 Huriel Nguimbi · Poitiers</span>
      </div>
      <div className="footer-links">
        <Link to="/projets">Projets</Link>
        <Link to="/expertise">Compétences</Link>
        <Link to="/a-propos">Qui suis-je</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-meta">
        <a href="mailto:contact@beyond31.online">contact@beyond31.online</a>
        <a href="https://instagram.com/beyond_31_" target="_blank" rel="noopener noreferrer">Instagram</a>
        <div>
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/confidentialite">Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 26));

  return (
    <div className="shell">
      <motion.header className={`topbar${scrolled ? ' topbar--scrolled' : ''}`} animate={reduceMotion ? undefined : { y: 0 }}>
        <Logo />
        <DesktopNav />
        <Link className="project-pill" to="/contact"><span>J’ai un projet</span><Icon name="arrow" size={15} /></Link>
        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Ouvrir la navigation">
          {open ? 'Fermer' : 'Menu'}
        </button>
      </motion.header>

      <AnimatePresence>
        <MobileMenu open={open} close={() => setOpen(false)} />
      </AnimatePresence>

      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
