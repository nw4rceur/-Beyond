import React, { useState } from 'react';
import Mark from './Mark';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'contact@beyond31.online';

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <footer id="contact">
      <div className="footer-top">
        <div className="section-label"><span>04</span> Contact</div>
        <p>Une idée en tête ?</p>
        <a className="footer-mail" href={`mailto:${email}`}>Faisons-la exister.<span>↗</span></a>
      </div>
      <div className="footer-contact-grid">
        <div><small>Email</small><button type="button" onClick={copy}>{copied ? 'Copié ✓' : email}</button></div>
        <div><small>Téléphone</small><a href="tel:+33625139627">+33 6 25 13 96 27</a></div>
        <div><small>Base</small><span>Poitiers, France</span></div>
        <div><small>Instagram</small><a href="https://instagram.com/beyond_31_" target="_blank" rel="noreferrer">@beyond_31_ ↗</a></div>
      </div>
      <div className="footer-bottom">
        <Mark compact />
        <span>© {new Date().getFullYear()} Beyond31</span>
        <div><a href="/mentions-legales.html">Mentions légales</a><a href="/politique-de-confidentialite.html">Confidentialité</a></div>
      </div>
    </footer>
  );
}
