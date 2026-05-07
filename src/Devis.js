import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ============================================================
   FONTS
   ============================================================ */
if (!document.getElementById('b31-fonts')) {
    const l = document.createElement('link');
    l.id = 'b31-fonts'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,300;0,400;1,300&display=swap';
    document.head.appendChild(l);
}

/* ============================================================
   PALETTE
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
   CSS
   ============================================================ */
if (!document.getElementById('b31-devis-css')) {
    const s = document.createElement('style'); s.id = 'b31-devis-css';
    s.textContent = `
    .stars-d { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
    .stars-d::before, .stars-d::after {
      content: ''; position: absolute; inset: 0;
      background-image:
        radial-gradient(1px 1px at 15% 22%, rgba(255,255,255,.5)  0%, transparent 100%),
        radial-gradient(1px 1px at 38% 68%, rgba(255,255,255,.35) 0%, transparent 100%),
        radial-gradient(1px 1px at 62% 18%, rgba(255,255,255,.55) 0%, transparent 100%),
        radial-gradient(1px 1px at 80% 75%, rgba(255,255,255,.3)  0%, transparent 100%),
        radial-gradient(1px 1px at 5%  50%, rgba(255,255,255,.4)  0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 50% 5%, rgba(201,170,82,.35) 0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 90% 35%, rgba(201,170,82,.25) 0%, transparent 100%);
    }
    .stars-d::after {
      background-image:
        radial-gradient(1px 1px at 25% 45%, rgba(255,255,255,.3)  0%, transparent 100%),
        radial-gradient(1px 1px at 55% 80%, rgba(255,255,255,.45) 0%, transparent 100%),
        radial-gradient(1px 1px at 75% 12%, rgba(255,255,255,.35) 0%, transparent 100%),
        radial-gradient(1px 1px at 95% 60%, rgba(255,255,255,.4)  0%, transparent 100%);
      opacity: .6;
    }

    /* Input & Select */
    .b31-input {
      width: 100%; background: ${C.surface}; border: 1px solid ${C.line};
      border-radius: 10px; padding: .82rem 1.1rem;
      font-family: 'Inter', sans-serif; font-size: .9rem; font-weight: 300;
      color: ${C.star}; outline: none; transition: border-color .2s, box-shadow .2s;
    }
    .b31-input::placeholder { color: ${C.muted}; }
    .b31-input:focus { border-color: ${C.goldBrd}; box-shadow: 0 0 0 3px rgba(201,170,82,.07); }

    .b31-select {
      width: 100%; background: ${C.surface}; border: 1px solid ${C.line};
      border-radius: 10px; padding: .82rem 1.1rem;
      font-family: 'Inter', sans-serif; font-size: .9rem; font-weight: 300;
      color: ${C.star}; outline: none; appearance: none; cursor: pointer;
      transition: border-color .2s;
    }
    .b31-select:focus { border-color: ${C.goldBrd}; }
    .b31-select option { background: ${C.deep}; color: ${C.star}; }

    /* Bouton principal */
    .btn-p {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: 'Outfit', sans-serif; font-weight: 500;
      font-size: .8rem; letter-spacing: .09em; text-transform: uppercase;
      padding: .82rem 2rem; background: ${C.gold}; color: ${C.void};
      border: none; border-radius: 40px; cursor: pointer; text-decoration: none;
      transition: background .2s, transform .2s, box-shadow .2s;
      box-shadow: 0 2px 16px rgba(201,170,82,.18);
    }
    .btn-p:hover { background: #B89A42; transform: translateY(-2px); box-shadow: 0 6px 26px rgba(201,170,82,.26); }
    .btn-p:active { transform: scale(.97); }
    .btn-p:disabled { opacity: .4; cursor: not-allowed; transform: none; }

    /* Bouton secondaire */
    .btn-s {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: 'Outfit', sans-serif; font-weight: 400;
      font-size: .8rem; letter-spacing: .09em; text-transform: uppercase;
      padding: .8rem 2rem; background: rgba(255,255,255,.04); color: ${C.prose};
      border: 1px solid rgba(255,255,255,.1); border-radius: 40px;
      cursor: pointer; text-decoration: none;
      transition: border-color .2s, color .2s, background .2s, transform .2s;
    }
    .btn-s:hover { border-color: rgba(255,255,255,.22); background: rgba(255,255,255,.07); color: ${C.star}; transform: translateY(-2px); }
    .btn-s:active { transform: scale(.97); }

    /* Label de champ */
    .field-label {
      font-family: 'Outfit', sans-serif; font-size: .65rem; font-weight: 500;
      letter-spacing: .14em; text-transform: uppercase;
      color: ${C.gold}; opacity: .75; margin-bottom: .42rem; display: block;
    }

    /* Carte service */
    .svc-card {
      display: flex; align-items: center; gap: 1rem;
      padding: 1.1rem 1.25rem; border-radius: 12px;
      background: ${C.surface}; border: 1px solid ${C.line};
      cursor: pointer;
      transition: border-color .22s, background .22s, box-shadow .22s;
    }
    .svc-card:hover { border-color: rgba(255,255,255,.1); box-shadow: 0 8px 28px rgba(0,0,0,.35); }
    .svc-card.selected { border-color: ${C.goldBrd}; background: ${C.goldDim}; }

    /* Checkbox custom */
    .b31-check {
      width: 20px; height: 20px; border-radius: 6px; flex-shrink: 0;
      border: 1.5px solid ${C.muted};
      display: flex; align-items: center; justify-content: center;
      transition: border-color .18s, background .18s;
    }
    .b31-check.checked { border-color: ${C.gold}; background: ${C.gold}; }

    /* Ligne de récap */
    .recap-line {
      display: flex; justify-content: space-between; align-items: baseline;
      padding: .7rem 0; border-bottom: 1px solid ${C.line};
    }
    .recap-line:last-child { border-bottom: none; }

    /* Nav */
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
   DONNÉES
   ============================================================ */

/* Devises et taux par zone */
const PAYS = [
    { value: 'fr', label: 'France',       devise: '€',    taux: 1 },
    { value: 'be', label: 'Belgique',     devise: '€',    taux: 1 },
    { value: 'ch', label: 'Suisse',       devise: 'CHF',  taux: 0.94 },
    { value: 'ca', label: 'Canada',       devise: 'CAD',  taux: 1.46 },
    { value: 'us', label: 'États-Unis',   devise: 'USD',  taux: 1.08 },
    { value: 'uk', label: 'Royaume-Uni',  devise: '£',    taux: 0.86 },
    { value: 'ga', label: 'Gabon',        devise: 'FCFA', taux: 655 },
    { value: 'cm', label: 'Cameroun',     devise: 'FCFA', taux: 655 },
    { value: 'ci', label: "Côte d'Ivoire",devise: 'FCFA', taux: 655 },
    { value: 'ma', label: 'Maroc',        devise: 'MAD',  taux: 10.8 },
    { value: 'sn', label: 'Sénégal',      devise: 'FCFA', taux: 655 },
    { value: 'de', label: 'Allemagne',    devise: '€',    taux: 1 },
];

/* Catalogue services avec prix base en € */
const SERVICES = [
    { id: 'web',       label: 'Création de site web',    desc: 'Site vitrine ou application sur-mesure',    base: 350, icon: '' },
    { id: 'uiux',      label: 'Design UI/UX',             desc: 'Prototypage, maquettes, expérience utilisateur', base: 280, icon: '' },
    { id: 'graphisme', label: 'Identité visuelle',        desc: 'Logo, charte graphique, direction artistique',  base: 210, icon: '' },
    { id: 'marketing', label: 'Marketing & publicité',    desc: 'Campagnes, stratégie, montage vidéo',       base: 180, icon: '' },
    { id: 'hardware',  label: 'Systèmes embarqués',       desc: 'Microcontrôleurs, circuits, IoT',           base: 320, icon: '' },
];

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
   COMPOSANT : Devis
   ============================================================ */
export default function Devis() {
    const [nom,      setNom]      = useState('');
    const [paysVal,  setPaysVal]  = useState('fr');
    const [selected, setSelected] = useState([]);  // ids des services cochés
    const [recap,    setRecap]    = useState(null); // résultat calculé
    const [step,     setStep]     = useState(1);    // 1 = formulaire, 2 = récap

    /* Pays courant */
    const pays = PAYS.find(p => p.value === paysVal) || PAYS[0];

    /* Toggle service */
    const toggleService = (id) => {
        setSelected(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
    };

    /* Formatage monétaire */
    const fmt = (n) => n.toLocaleString('fr-FR', { maximumFractionDigits: 0 });

    /* Calcul du devis */
    const calculer = () => {
        if (!nom || selected.length === 0) return;
        const lignes = SERVICES.filter(s => selected.includes(s.id)).map(s => ({
            label: s.label,
            prix: Math.round(s.base * pays.taux),
        }));
        const total  = lignes.reduce((acc, l) => acc + l.prix, 0);
        const mensuel = Math.round(total / 3);
        setRecap({ nom, pays: pays.label, devise: pays.devise, lignes, total, mensuel });
        setStep(2);
    };

    /* Export PDF via jsPDF (chargé depuis CDN) */
    const exportPDF = async () => {
        if (!recap) return;

        /* Chargement dynamique de jsPDF si pas encore présent */
        if (!window.jspdf) {
            await new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
                script.onload = resolve;
                document.head.appendChild(script);
            });
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        /* En-tête */
        doc.setFillColor(6, 9, 15);
        doc.rect(0, 0, 210, 297, 'F');

        doc.setTextColor(232, 237, 245);
        doc.setFontSize(22); doc.setFont('helvetica', 'bold');
        doc.text('BEYOND 31', 20, 28);
        doc.setFontSize(10); doc.setFont('helvetica', 'normal');
        doc.setTextColor(138, 150, 171);
        doc.text('Agence créative et technologique', 20, 36);
        doc.text('contact@beyond31.fr  |  +33 6 25 13 96 27', 20, 42);

        /* Ligne séparatrice dorée */
        doc.setDrawColor(201, 170, 82);
        doc.setLineWidth(.4);
        doc.line(20, 48, 190, 48);

        /* Infos client */
        doc.setTextColor(201, 170, 82);
        doc.setFontSize(8); doc.setFont('helvetica', 'bold');
        doc.text('DEVIS ÉTABLI POUR', 20, 58);
        doc.setTextColor(232, 237, 245);
        doc.setFontSize(13); doc.setFont('helvetica', 'bold');
        doc.text(recap.nom, 20, 66);
        doc.setFontSize(9); doc.setFont('helvetica', 'normal');
        doc.setTextColor(138, 150, 171);
        doc.text(recap.pays, 20, 72);

        /* Date */
        const date = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
        doc.setTextColor(138, 150, 171);
        doc.setFontSize(8);
        doc.text(`Émis le ${date}`, 140, 66);

        /* Tableau services */
        doc.setTextColor(201, 170, 82);
        doc.setFontSize(8); doc.setFont('helvetica', 'bold');
        doc.text('SERVICES', 20, 84);
        doc.text('MONTANT', 160, 84);
        doc.setDrawColor(74, 85, 104);
        doc.setLineWidth(.2);
        doc.line(20, 87, 190, 87);

        let y = 95;
        doc.setFont('helvetica', 'normal');
        recap.lignes.forEach((l) => {
            doc.setTextColor(232, 237, 245);
            doc.setFontSize(10);
            doc.text(l.label, 20, y);
            doc.text(`${fmt(l.prix)} ${recap.devise}`, 160, y);
            y += 10;
        });

        /* Total */
        doc.setDrawColor(201, 170, 82);
        doc.setLineWidth(.4);
        doc.line(20, y + 2, 190, y + 2);
        y += 10;

        doc.setTextColor(201, 170, 82);
        doc.setFontSize(12); doc.setFont('helvetica', 'bold');
        doc.text('TOTAL', 20, y);
        doc.text(`${fmt(recap.total)} ${recap.devise}`, 160, y);
        y += 8;

        doc.setTextColor(138, 150, 171);
        doc.setFontSize(9); doc.setFont('helvetica', 'normal');
        doc.text(`Échéance mensuelle (3 mois) : ${fmt(recap.mensuel)} ${recap.devise} / mois`, 20, y);

        /* Note de bas de page */
        y += 20;
        doc.setFontSize(8);
        doc.setTextColor(74, 85, 104);
        doc.text('Ce devis est indicatif et valable 30 jours. Il ne constitue pas un engagement contractuel.', 20, y);
        doc.text('Contactez-nous pour affiner les prestations selon vos besoins.', 20, y + 6);

        doc.save(`devis_beyond31_${recap.nom.replace(/\s+/g, '_').toLowerCase()}.pdf`);
    };

    return (
        <div style={{ background: C.void, color: C.prose, minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* ── Header ── */}
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
                        <a href="/contact"  className="nav-l">Contact</a>
                        <a href="/"              className="btn-s" style={{ padding: '.56rem 1.3rem', fontSize: '.74rem' }}>Retour</a>
                    </nav>
                </div>
            </header>

            {/* ── Hero ── */}
            <section style={{ position: 'relative', overflow: 'hidden', padding: '6rem 2.5rem 3.5rem' }}>
                <div className="stars-d" />
                <Orb x="65%" y="-25%" size={480} color="rgba(37,55,130,.11)" blur={140} />
                <Orb x="-8%" y="10%"  size={340} color="rgba(201,170,82,.05)" blur={120} />

                <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, ease: [.25,.1,.25,1] }}>
                        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.64rem', fontWeight: 400, letterSpacing: '.2em', textTransform: 'uppercase', color: C.gold, opacity: .75, marginBottom: '.65rem' }}>
                            Simulateur de devis
                        </p>
                        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem, 4.5vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-.025em', color: C.star, marginBottom: '.85rem' }}>
                            Estimez votre projet<br /><span style={{ color: C.gold }}>en quelques secondes.</span>
                        </h1>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.9rem', color: C.prose, lineHeight: 1.85, maxWidth: 440, margin: '0 auto' }}>
                            Sélectionnez vos services, choisissez votre pays. On génère une estimation instantanée que vous pouvez télécharger en PDF.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Corps ── */}
            <section style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="stars-d" style={{ opacity: .25 }} />
                <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 2.5rem 8rem', position: 'relative', zIndex: 2 }}>

                    {/* ── Étape 1 : Formulaire ── */}
                    {step === 1 && (
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>

                            {/* Identité */}
                            <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 16, padding: '2rem', marginBottom: '1.4rem' }}>
                                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.68rem', fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: C.gold, opacity: .7, marginBottom: '1.2rem' }}>
                                    Vos informations
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.1rem' }}>
                                    <div>
                                        <span className="field-label">Nom complet *</span>
                                        <input className="b31-input" type="text" placeholder="Jean Dupont" value={nom} onChange={e => setNom(e.target.value)} />
                                    </div>
                                    <div>
                                        <span className="field-label">Pays de facturation</span>
                                        <div style={{ position: 'relative' }}>
                                            <select className="b31-select" value={paysVal} onChange={e => setPaysVal(e.target.value)}>
                                                {PAYS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                                            </select>
                                            {/* Chevron décoratif */}
                                            <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: C.muted, pointerEvents: 'none', fontSize: '.8rem' }}>▾</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Devise sélectionnée */}
                                <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.gold, opacity: .6 }} />
                                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.72rem', color: C.muted, letterSpacing: '.05em' }}>
                                        Devise : <span style={{ color: C.prose }}>{pays.devise}</span> — taux appliqué : {pays.taux === 1 ? 'base' : `×${pays.taux}`}
                                    </p>
                                </div>
                            </div>

                            {/* Services */}
                            <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 16, padding: '2rem', marginBottom: '1.4rem' }}>
                                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.68rem', fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: C.gold, opacity: .7, marginBottom: '1.2rem' }}>
                                    Services souhaités *
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
                                    {SERVICES.map(svc => {
                                        const isSelected = selected.includes(svc.id);
                                        return (
                                            <div key={svc.id} className={`svc-card${isSelected ? ' selected' : ''}`} onClick={() => toggleService(svc.id)}>
                                                {/* Checkbox */}
                                                <div className={`b31-check${isSelected ? ' checked' : ''}`}>
                                                    {isSelected && <span style={{ color: C.void, fontSize: '.75rem', fontWeight: 700 }}>✓</span>}
                                                </div>
                                                {/* Icône */}
                                                <div style={{ width: 36, height: 36, borderRadius: 8, background: C.goldDim, border: `1px solid ${C.goldBrd}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                    <span style={{ fontSize: '.9rem', color: C.gold }}>{svc.icon}</span>
                                                </div>
                                                {/* Texte */}
                                                <div style={{ flex: 1 }}>
                                                    <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: '.95rem', color: isSelected ? C.star : C.prose, transition: 'color .18s', marginBottom: 2 }}>{svc.label}</p>
                                                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.78rem', color: C.muted }}>{svc.desc}</p>
                                                </div>
                                                {/* Prix indicatif */}
                                                <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '.9rem', color: isSelected ? C.gold : C.muted, transition: 'color .18s', flexShrink: 0 }}>
                                                    à partir de {Math.round(svc.base * pays.taux).toLocaleString('fr-FR')} {pays.devise}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* CTA */}
                            <div style={{ display: 'flex', gap: '.8rem', alignItems: 'center' }}>
                                <button className="btn-p" onClick={calculer} disabled={!nom || selected.length === 0}>
                                    Voir mon estimation
                                </button>
                                {(!nom || selected.length === 0) && (
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.78rem', color: C.muted }}>
                                        Renseignez votre nom et sélectionnez au moins un service.
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* ── Étape 2 : Récapitulatif ── */}
                    {step === 2 && recap && (
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>

                            {/* En-tête récap */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.6rem' }}>
                                <div>
                                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.65rem', fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: C.gold, opacity: .75, marginBottom: '.3rem' }}>Estimation</p>
                                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: C.star }}>Votre devis, {recap.nom.split(' ')[0]}</h2>
                                </div>
                                <button onClick={() => { setStep(1); setRecap(null); }} className="btn-s" style={{ padding: '.55rem 1.2rem', fontSize: '.74rem' }}>
                                    ← Modifier
                                </button>
                            </div>

                            {/* Carte récap */}
                            <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 16, padding: '2rem', marginBottom: '1.4rem' }}>

                                {/* Infos */}
                                <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: `1px solid ${C.line}` }}>
                                    {[['Client', recap.nom], ['Pays', recap.pays], ['Devise', recap.devise]].map(([label, val]) => (
                                        <div key={label}>
                                            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.62rem', fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: C.muted, marginBottom: 3 }}>{label}</p>
                                            <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: '.92rem', color: C.star }}>{val}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Lignes */}
                                <div>
                                    {recap.lignes.map((l, i) => (
                                        <div key={i} className="recap-line">
                                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.9rem', color: C.prose }}>{l.label}</p>
                                            <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: '.92rem', color: C.star }}>{fmt(l.prix)} {recap.devise}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Total */}
                                <div style={{ marginTop: '1.2rem', paddingTop: '1.2rem', borderTop: `1px solid ${C.goldBrd}`, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                    <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: C.star }}>Total estimé</p>
                                    <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.55rem', color: C.gold }}>{fmt(recap.total)} {recap.devise}</p>
                                </div>

                                {/* Mensualité */}
                                <div style={{ marginTop: '.75rem', padding: '.85rem 1rem', background: C.goldDim, border: `1px solid ${C.goldBrd}`, borderRadius: 8 }}>
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.84rem', color: C.prose }}>
                                        Paiement en 3 fois : <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, color: C.gold }}>{fmt(recap.mensuel)} {recap.devise} / mois</span>
                                    </p>
                                </div>
                            </div>

                            {/* Note */}
                            <div style={{ padding: '1rem 1.1rem', background: C.surface, border: `1px solid ${C.line}`, borderRadius: 10, marginBottom: '1.6rem' }}>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontStyle: 'italic', fontSize: '.82rem', color: C.muted, lineHeight: 1.8 }}>
                                    Ces montants sont indicatifs et établis à partir de nos tarifs de base. Le devis définitif sera affiné lors d'un premier échange, selon la complexité réelle du projet.
                                </p>
                            </div>

                            {/* Actions */}
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <button className="btn-p" onClick={exportPDF}>
                                    Télécharger en PDF
                                </button>
                                <a href="/contact.html" className="btn-s">
                                    Nous contacter
                                </a>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}