import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import Layout from './components/MiseEnPage';
import Accueil from './pages/Accueil';
import Projets from './pages/Projets';
import DetailProjet from './pages/DetailProjet';
import Competences from './pages/Competences';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import PageIntrouvable from './pages/PageIntrouvable';
import { Legal, Privacy } from './pages/MentionsLegales';

// Le changement de page ramène en haut sans animation forcée si l’utilisateur la désactive.
function AnimatedRoutes() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 8, filter: 'blur(3px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -5, filter: 'blur(2px)' }}
        transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/:slug" element={<DetailProjet />} />
          <Route path="/expertise" element={<Competences />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/studio" element={<Navigate to="/a-propos" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/confidentialite" element={<Privacy />} />
          <Route path="*" element={<PageIntrouvable />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return <Layout><AnimatedRoutes /></Layout>;
}
