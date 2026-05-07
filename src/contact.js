import React, { useState } from 'react';
import { motion } from 'framer-motion';

/* ============================================================
   FONTS — partagées avec Home (injectées une seule fois)
   ============================================================ */
if (!document.getElementById('b31-fonts')) {
    const l = document.createElement('link');
    l.id = 'b31-fonts'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,300;0,400;1,300&display=swap';
    document.head.appendChild(l);
}

/* ============================================================
   PALETTE — identique à Home
   ============================================================ */
const C = {
    void:    '#06090F',
    deep:    '#0B1220',
    surface: '#0F1828',
    gold:    '#C9AA52',
    goldDim: 'rgba(201,170,82,.09)',
    goldBrd: 'rgba(201,170,82,.18)',
    star:    '#E8EDF5',
    prose:   '#8A96AB',
    muted:   '#4A5568',
    line:    'rgba(255,255,255,.05)',
};

/* ============================================================
   CSS — styles spécifiques à la page Contact
   ============================================================ */
if (!document.getElementById('b31-contact-css')) {
    const s = document.createElement('style'); s.id = 'b31-contact-css';
    s.textContent = `
    /* Champ d'étoiles */
    .stars-c { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
    .stars-c::before, .stars-c::after {
      content: ''; position: absolute; inset: 0;
      background-image:
        radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,.5)  0%, transparent 100%),
        radial-gradient(1px 1px at 34% 60%, rgba(255,255,255,.35) 0%, transparent 100%),
        radial-gradient(1px 1px at 55% 25%, rgba(255,255,255,.55) 0%, transparent 100%),
        radial-gradient(1px 1px at 72% 80%, rgba(255,255,255,.3)  0%, transparent 100%),
        radial-gradient(1px 1px at 88% 45%, rgba(255,255,255,.45) 0%, transparent 100%),
        radial-gradient(1px 1px at 6%  90%, rgba(255,255,255,.4)  0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 42% 8%, rgba(201,170,82,.35) 0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 80% 20%, rgba(201,170,82,.25) 0%, transparent 100%);
    }
    .stars-c::after {
      background-image:
        radial-gradient(1px 1px at 20% 40%, rgba(255,255,255,.3)  0%, transparent 100%),
        radial-gradient(1px 1px at 48% 75%, rgba(255,255,255,.45) 0%, transparent 100%),
        radial-gradient(1px 1px at 65% 15%, rgba(255,255,255,.35) 0%, transparent 100%),
        radial-gradient(1px 1px at 92% 68%, rgba(255,255,255,.4)  0%, transparent 100%);
      opacity: .6;
    }

    /* Input / Textarea */
    .b31-input {
      width: 100%;
      background: ${C.surface};
      border: 1px solid ${C.line};
      border-radius: 10px;
      padding: .85rem 1.1rem;
      font-family: 'Inter', sans-serif;
      font-size: .9rem; font-weight: 300;
      color: ${C.star};
      outline: none;
      transition: border-color .2s, box-shadow .2s;
      resize: none;
    }
    .b31-input::placeholder { color: ${C.muted}; }
    .b31-input:focus {
      border-color: ${C.goldBrd};
      box-shadow: 0 0 0 3px rgba(201,170,82,.07);
    }

    /* Select */
    .b31-select {
      width: 100%;
      background: ${C.surface};
      border: 1px solid ${C.line};
      border-radius: 10px;
      padding: .85rem 1.1rem;
      font-family: 'Inter', sans-serif;
      font-size: .9rem; font-weight: 300;
      color: ${C.star};
      outline: none;
      appearance: none;
      cursor: pointer;
      transition: border-color .2s;
    }
    .b31-select:focus { border-color: ${C.goldBrd}; }
    .b31-select option { background: ${C.surface}; color: ${C.star}; }

    /* Bouton principal */
    .btn-p {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: 'Outfit', sans-serif; font-weight: 500;
      font-size: .82rem; letter-spacing: .09em; text-transform: uppercase;
      padding: .85rem 2.2rem;
      background: ${C.gold}; color: ${C.void};
      border: none; border-radius: 40px; cursor: pointer; text-decoration: none;
      transition: background .2s, transform .2s, box-shadow .2s;
      box-shadow: 0 2px 16px rgba(201,170,82,.18);
    }
    .btn-p:hover { background: #B89A42; transform: translateY(-2px); box-shadow: 0 6px 26px rgba(201,170,82,.26); }
    .btn-p:active { transform: scale(.97); }
    .btn-p:disabled { opacity: .45; cursor: not-allowed; transform: none; }

    /* Label de champ */
    .field-label {
      font-family: 'Outfit', sans-serif;
      font-size: .68rem; font-weight: 500;
      letter-spacing: .14em; text-transform: uppercase;
      color: ${C.gold}; opacity: .75;
      margin-bottom: .4rem; display: block;
    }

    /* Chip de type de projet */
    .chip {
      display: inline-flex; align-items: center; gap: 6px;
      font-family: 'Outfit', sans-serif; font-size: .75rem; font-weight: 400;
      letter-spacing: .05em;
      padding: .45rem 1rem; border-radius: 30px; cursor: pointer;
      border: 1px solid ${C.line};
      background: transparent; color: ${C.prose};
      transition: border-color .2s, background .2s, color .2s;
      user-select: none;
    }
    .chip:hover { border-color: ${C.goldBrd}; color: ${C.star}; }
    .chip.active {
      border-color: ${C.gold}; background: ${C.goldDim}; color: ${C.gold};
    }

    /* Info latérale */
    .info-block {
      display: flex; align-items: flex-start; gap: 12px;
      padding: 1rem 1.1rem; border-radius: 10px;
      background: ${C.surface}; border: 1px solid ${C.line};
    }
    .info-icon {
      width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0;
      background: ${C.goldDim}; border: 1px solid ${C.goldBrd};
      display: flex; align-items: center; justify-content: center;
      font-size: .9rem;
    }

    /* Nav link */
    .nav-l {
      font-family: 'Outfit', sans-serif; font-size: .75rem; font-weight: 400;
      letter-spacing: .1em; text-transform: uppercase;
      color: ${C.prose}; text-decoration: none; transition: color .18s;
    }
    .nav-l:hover { color: ${C.star}; }
  `;
    document.head.appendChild(s);
}

/* ============================================================
   COMPOSANT : Orb
   ============================================================ */
function Orb({ x, y, size, color, blur }) {
    return (
        <div style={{
            position: 'absolute', left: x, top: y,
            width: size, height: size, borderRadius: '50%',
            background: color, filter: `blur(${blur}px)`,
            pointerEvents: 'none', zIndex: 0,
        }} />
    );
}

/* ============================================================
   COMPOSANT : Contact
   ============================================================ */
export default function Contact() {
    /* État du formulaire */
    const [form, setForm] = useState({
        nom: '', email: '', telephone: '', entreprise: '', message: '',
    });
    const [projets, setProjets] = useState([]);  // types de projet sélectionnés
    const [budget, setBudget] = useState('');
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    /* Types de projets possibles */
    const typesProjets = [
        { id: 'identite',  label: 'Identité visuelle', emoji: '✦' },
        { id: 'web',       label: 'Site web',           emoji: '◈' },
        { id: 'uiux',      label: 'UI/UX Design',       emoji: '◉' },
        { id: 'marketing', label: 'Marketing',          emoji: '◎' },
        { id: 'hardware',  label: 'Systèmes embarqués', emoji: '⬡' },
        { id: 'autre',     label: 'Autre',              emoji: '○' },
    ];

    const budgets = ['Moins de 500 €', '500 – 1 500 €', 'À définir ensemble'];

    const toggleProjet = (id) => {
        setProjets(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
    };

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    /* Simulation d'envoi */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.nom || !form.email || !form.message) return;
        setSending(true);
        setTimeout(() => { setSending(false); setSent(true); }, 1400);
    };

    /* ── Champ réutilisable ── */
    const Field = ({ label, children }) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="field-label">{label}</span>
            {children}
        </div>
    );

    return (
        <div style={{ background: C.void, color: C.prose, minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* ── Header minimal ── */}
            <header style={{
                position: 'sticky', top: 0, zIndex: 100,
                background: 'rgba(6,9,15,.9)', backdropFilter: 'blur(20px)',
                borderBottom: `1px solid ${C.line}`,
            }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '.9rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <a href="/" style={{ width: 90, display: 'block' }}>
                        <img src="/images/beyond31_logo.png" alt="Beyond 31" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </a>
                    <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <a href="/#services"     className="nav-l">Services</a>
                        <a href="/#realisations" className="nav-l">Réalisations</a>
                        <a href="/Devis-gratuit.html" className="btn-p" style={{ padding: '.56rem 1.3rem', fontSize: '.74rem' }}>Devis gratuit</a>
                    </nav>
                </div>
            </header>

            {/* ── Hero court ── */}
            <section style={{ position: 'relative', overflow: 'hidden', padding: '6rem 2.5rem 4rem' }}>
                <div className="stars-c" />
                <Orb x="60%" y="-30%" size={500} color="rgba(37,55,130,.12)" blur={140} />
                <Orb x="-5%" y="20%"  size={350} color="rgba(201,170,82,.05)" blur={120} />

                <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, ease: [.25,.1,.25,1] }}>
                        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.64rem', fontWeight: 400, letterSpacing: '.2em', textTransform: 'uppercase', color: C.gold, opacity: .75, marginBottom: '.65rem' }}>
                            Contact
                        </p>
                        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.08, letterSpacing: '-.025em', color: C.star, marginBottom: '.9rem' }}>
                            Vous avez une idée.<br /><span style={{ color: C.gold }}>Parlons-en.</span>
                        </h1>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.92rem', color: C.prose, lineHeight: 1.85, maxWidth: 480, margin: '0 auto' }}>
                            Un message suffit pour démarrer. Nous répondons sous 24 h et prenons le temps de comprendre votre projet avant de proposer quoi que ce soit.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Corps principal : formulaire + infos latérales ── */}
            <section style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="stars-c" style={{ opacity: .3 }} />
                <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2.5rem 8rem', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '3.5rem', alignItems: 'start', position: 'relative', zIndex: 2 }}>

                    {/* ══ FORMULAIRE ══ */}
                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .15 }}>

                        {/* Carte principale */}
                        <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 16, padding: '2.2rem', marginBottom: '1.5rem' }}>

                            {/* Grille identité */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.1rem', marginBottom: '1.1rem' }}>
                                <Field label="Nom complet *">
                                    <input className="b31-input" type="text" name="nom" placeholder="Votre nom" value={form.nom} onChange={handleChange} />
                                </Field>
                                <Field label="Email *">
                                    <input className="b31-input" type="email" name="email" placeholder="you@email.com" value={form.email} onChange={handleChange} />
                                </Field>
                                <Field label="Téléphone">
                                    <input className="b31-input" type="tel" name="telephone" placeholder="+33 6 …" value={form.telephone} onChange={handleChange} />
                                </Field>
                                <Field label="Entreprise / Projet">
                                    <input className="b31-input" type="text" name="entreprise" placeholder="Nom de votre structure" value={form.entreprise} onChange={handleChange} />
                                </Field>
                            </div>

                            {/* Types de projet */}
                            <Field label="Type de projet">
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '.1rem' }}>
                                    {typesProjets.map(t => (
                                        <button key={t.id} type="button" onClick={() => toggleProjet(t.id)}
                                                className={`chip${projets.includes(t.id) ? ' active' : ''}`}>
                                            <span>{t.emoji}</span> {t.label}
                                        </button>
                                    ))}
                                </div>
                            </Field>
                        </div>

                        {/* Budget */}
                        <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 16, padding: '1.8rem', marginBottom: '1.5rem' }}>
                            <Field label="Enveloppe budgétaire indicative">
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '.1rem' }}>
                                    {budgets.map(b => (
                                        <button key={b} type="button" onClick={() => setBudget(b)}
                                                className={`chip${budget === b ? ' active' : ''}`}>
                                            {b}
                                        </button>
                                    ))}
                                </div>
                            </Field>
                        </div>

                        {/* Message */}
                        <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 16, padding: '1.8rem', marginBottom: '2rem' }}>
                            <Field label="Décrivez votre projet *">
                <textarea className="b31-input" name="message" rows={6}
                          placeholder="Qu'est-ce que vous souhaitez créer ? Quel est votre objectif ? Plus vous nous donnez de contexte, plus notre réponse sera utile."
                          value={form.message} onChange={handleChange} />
                            </Field>
                        </div>

                        {/* Bouton envoi / confirmation */}
                        {!sent ? (
                            <button className="btn-p" onClick={handleSubmit} disabled={sending || !form.nom || !form.email || !form.message}
                                    style={{ fontSize: '.84rem', padding: '.9rem 2.4rem', opacity: (sending || !form.nom || !form.email || !form.message) ? .45 : 1 }}>
                                {sending ? 'Envoi en cours…' : 'Envoyer le message'}
                            </button>
                        ) : (
                            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                                        style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '1rem 1.4rem', background: C.goldDim, border: `1px solid ${C.goldBrd}`, borderRadius: 10 }}>
                                <span style={{ fontSize: '1.1rem' }}>✓</span>
                                <div>
                                    <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: '.9rem', color: C.gold, marginBottom: 2 }}>Message envoyé</p>
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.82rem', color: C.prose }}>Nous vous répondrons sous 24 h.</p>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* ══ INFOS LATÉRALES ══ */}
                    <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .25 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'sticky', top: '6rem' }}>

                        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.64rem', fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: C.gold, opacity: .7, marginBottom: '.2rem' }}>
                            Nous joindre
                        </p>

                        {[
                            { icon: '✉', label: 'Email', value: 'contact@beyond31.fr', href: 'mailto:contact@beyond31.fr' },
                            { icon: '☎', label: 'Téléphone', value: '+33 6 25 13 96 27', href: 'tel:+33625139627' },
                            { icon: '◎', label: 'Localisation', value: 'Poitiers, France', href: null },
                            { icon: '◈', label: 'Instagram', value: '@beyond_31_', href: 'https://instagram.com/beyond_31_' },
                        ].map((item) => (
                            <div key={item.label} className="info-block">
                                <div className="info-icon"><span style={{ fontSize: '.82rem', color: C.gold }}>{item.icon}</span></div>
                                <div>
                                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.65rem', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: C.muted, marginBottom: 3 }}>{item.label}</p>
                                    {item.href ? (
                                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                           style={{ fontFamily: 'Inter, sans-serif', fontSize: '.86rem', color: C.prose, textDecoration: 'none', transition: 'color .18s' }}
                                           onMouseEnter={e => e.target.style.color = C.star}
                                           onMouseLeave={e => e.target.style.color = C.prose}>
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.86rem', color: C.prose }}>{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Note de confiance */}
                        <div style={{ marginTop: '.5rem', padding: '1.2rem 1.1rem', background: C.goldDim, border: `1px solid ${C.goldBrd}`, borderRadius: 10 }}>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontStyle: 'italic', fontSize: '.82rem', color: C.prose, lineHeight: 1.8 }}>
                                "Chaque projet commence par une conversation honnête. Aucun engagement n'est demandé au premier contact."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}