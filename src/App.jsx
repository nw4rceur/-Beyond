import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

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
   CSS GLOBAL
   ============================================================ */
if (!document.getElementById('b31-css')) {
    const s = document.createElement('style'); s.id = 'b31-css';
    s.textContent = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-track { background: ${C.void}; }
    ::-webkit-scrollbar-thumb { background: ${C.goldBrd}; border-radius: 2px; }

    @keyframes drift {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-9px); }
    }
    @keyframes marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }

    /* Champ d'étoiles */
    .stars { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
    .stars::before, .stars::after {
      content: ''; position: absolute; inset: 0;
      background-image:
        radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,.55) 0%, transparent 100%),
        radial-gradient(1px 1px at 28% 72%, rgba(255,255,255,.4)  0%, transparent 100%),
        radial-gradient(1px 1px at 44% 35%, rgba(255,255,255,.6)  0%, transparent 100%),
        radial-gradient(1px 1px at 58% 85%, rgba(255,255,255,.35) 0%, transparent 100%),
        radial-gradient(1px 1px at 72% 22%, rgba(255,255,255,.5)  0%, transparent 100%),
        radial-gradient(1px 1px at 86% 60%, rgba(255,255,255,.45) 0%, transparent 100%),
        radial-gradient(1px 1px at 93% 12%, rgba(255,255,255,.3)  0%, transparent 100%),
        radial-gradient(1px 1px at 6%  55%, rgba(255,255,255,.5)  0%, transparent 100%),
        radial-gradient(1px 1px at 36% 92%, rgba(255,255,255,.25) 0%, transparent 100%),
        radial-gradient(1px 1px at 64% 48%, rgba(255,255,255,.4)  0%, transparent 100%),
        radial-gradient(1px 1px at 80% 78%, rgba(255,255,255,.35) 0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 20% 5%,  rgba(201,170,82,.4) 0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 76% 38%, rgba(201,170,82,.3) 0%, transparent 100%);
    }
    .stars::after {
      background-image:
        radial-gradient(1px 1px at 8%  30%, rgba(255,255,255,.3)  0%, transparent 100%),
        radial-gradient(1px 1px at 22% 58%, rgba(255,255,255,.45) 0%, transparent 100%),
        radial-gradient(1px 1px at 38% 15%, rgba(255,255,255,.35) 0%, transparent 100%),
        radial-gradient(1px 1px at 52% 70%, rgba(255,255,255,.5)  0%, transparent 100%),
        radial-gradient(1px 1px at 68% 95%, rgba(255,255,255,.25) 0%, transparent 100%),
        radial-gradient(1px 1px at 84% 42%, rgba(255,255,255,.4)  0%, transparent 100%),
        radial-gradient(1px 1px at 96% 80%, rgba(255,255,255,.3)  0%, transparent 100%),
        radial-gradient(1px 1px at 14% 88%, rgba(255,255,255,.35) 0%, transparent 100%),
        radial-gradient(1px 1px at 30% 42%, rgba(255,255,255,.45) 0%, transparent 100%),
        radial-gradient(1px 1px at 48% 62%, rgba(255,255,255,.3)  0%, transparent 100%),
        radial-gradient(1px 1px at 90% 25%, rgba(255,255,255,.5)  0%, transparent 100%);
      opacity: .6;
    }

    /* Bouton principal — doré plein */
    .btn-p {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: 'Outfit', sans-serif; font-weight: 500;
      font-size: .8rem; letter-spacing: .09em; text-transform: uppercase;
      padding: .8rem 2rem;
      background: ${C.gold}; color: ${C.void};
      border: none; border-radius: 40px; cursor: pointer; text-decoration: none;
      transition: background .2s, transform .2s, box-shadow .2s;
      box-shadow: 0 2px 16px rgba(201,170,82,.18);
    }
    .btn-p:hover { background: #B89A42; transform: translateY(-2px); box-shadow: 0 6px 26px rgba(201,170,82,.26); }
    .btn-p:active { transform: scale(.97); }

    /* Bouton secondaire — contour doux, border-radius généreuse */
    .btn-s {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: 'Outfit', sans-serif; font-weight: 400;
      font-size: .8rem; letter-spacing: .09em; text-transform: uppercase;
      padding: .78rem 2rem;
      background: rgba(255,255,255,.04); color: ${C.prose};
      border: 1px solid rgba(255,255,255,.1);
      border-radius: 40px;
      cursor: pointer; text-decoration: none;
      transition: border-color .2s, color .2s, background .2s, transform .2s;
    }
    .btn-s:hover {
      border-color: rgba(255,255,255,.22);
      background: rgba(255,255,255,.07);
      color: ${C.star};
      transform: translateY(-2px);
    }
    .btn-s:active { transform: scale(.97); }

    /* Liens de navigation — desktop */
    .nav-l {
      font-family: 'Outfit', sans-serif; font-size: .75rem; font-weight: 400;
      letter-spacing: .1em; text-transform: uppercase;
      color: ${C.prose}; text-decoration: none; transition: color .18s;
    }
    .nav-l:hover { color: ${C.star}; }

    /* Liens de navigation — menu mobile (plus grands, avec fond au hover) */
    .nav-mobile {
      display: flex; align-items: center; gap: 12px;
      font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 400;
      letter-spacing: .06em;
      color: ${C.prose}; text-decoration: none;
      padding: .75rem 1rem; border-radius: 8px;
      transition: color .18s, background .18s;
    }
    .nav-mobile:hover { color: ${C.star}; background: rgba(255,255,255,.04); }
    .nav-mobile-icon {
      width: 30px; height: 30px; border-radius: 8px;
      background: ${C.goldDim}; border: 1px solid ${C.goldBrd};
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; font-size: .85rem;
    }

    /* Label de section */
    .s-lbl {
      font-family: 'Outfit', sans-serif; font-size: .62rem; font-weight: 400;
      letter-spacing: .22em; text-transform: uppercase;
      color: ${C.gold}; opacity: .7; margin-bottom: .65rem;
    }

    /* Tag */
    .tag {
      display: inline-block;
      font-family: 'Outfit', sans-serif; font-size: .65rem; font-weight: 400;
      letter-spacing: .07em; text-transform: uppercase;
      padding: .2rem .65rem; border-radius: 20px;
      background: ${C.goldDim}; color: ${C.gold};
      border: 1px solid ${C.goldBrd};
    }

    /* Carte service */
    .c-svc {
      background: ${C.surface}; border-radius: 12px; overflow: hidden;
      border: 1px solid ${C.line};
      transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
    }
    .c-svc:hover { transform: translateY(-5px); border-color: ${C.goldBrd}; box-shadow: 0 18px 48px rgba(0,0,0,.55); }
    .c-svc img { transition: transform .6s ease; }
    .c-svc:hover img { transform: scale(1.05); }

    /* Carte projet */
    .c-prj {
      background: ${C.surface}; border-radius: 12px; overflow: hidden;
      border: 1px solid ${C.line}; cursor: pointer;
      transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
    }
    .c-prj:hover { transform: translateY(-5px); border-color: ${C.goldBrd}; box-shadow: 0 18px 48px rgba(0,0,0,.55); }
    .c-prj img { display: block; transition: transform .6s ease; }
    .c-prj:hover img { transform: scale(1.05); }

    /* Carte avis */
    .c-avis {
      background: ${C.surface}; border-radius: 12px;
      border: 1px solid ${C.line}; padding: 1.4rem 1.5rem;
      transition: border-color .22s ease, box-shadow .22s ease;
      flex-shrink: 0; width: 280px;
    }
    .c-avis:hover { border-color: ${C.goldBrd}; box-shadow: 0 12px 36px rgba(0,0,0,.4); }
  `;
    document.head.appendChild(s);
}

/* ============================================================
   CONFIG
   ============================================================ */
const config = {
    logoLight: '/images/beyond31_logo.png',
    nomAgence: 'Beyond 31',
    slogan:    'Concrétisez vos idées en une semaine.',
    reseaux:   { instagram: 'https://instagram.com/beyond_31_' },
    email:     'contact@beyond31.fr',
    telephone: '+33 6 25 13 96 27',
    adresse:   'Poitiers, France',

    services: [
        { titre: 'Identité visuelle',      description: "Votre marque mérite une identité qui lui ressemble. Logo, typographie, charte graphique — nous construisons un univers visuel cohérent et mémorable.",      illustration: '/images/id_vsuelle.jpeg',    motsCles: ['Logo', 'Charte graphique', 'Direction artistique'] },
        { titre: 'Marketing & publicité',  description: "Une bonne idée n'a de valeur que si elle est vue. Nous concevons des campagnes qui parlent juste, au bon moment, aux bonnes personnes.",                       illustration: '/images/marketing_pub.jpeg',         motsCles: ['Publicité', 'Stratégie', 'Montage vidéo'] },
        { titre: 'UI/UX Design',           description: "Une interface réussie, c'est celle qu'on ne remarque pas, parce qu'elle fonctionne naturellement. Nous concevons des expériences fluides et humaines.",      illustration: '/images/design_ux_ui.jpeg',       motsCles: ['Prototypage', 'Expérience utilisateur', 'App mobile'] },
        { titre: 'Développement web',      description: "Du site vitrine à l'application complexe, nous développons des solutions sur-mesure pensées pour durer, évoluer et performer.",                                illustration: '/images/dev_web.jpeg', motsCles: ['React', 'HTML', 'CSS', 'Javascript', 'WordPress'] },
        { titre: 'Systèmes embarqués',     description: "Nous programmons des microcontrôleurs et concevons des circuits électroniques pour donner vie à des objets intelligents — là où le code touche le monde réel.", illustration: '/images/systeme_embarque.jpeg',       motsCles: ['RP2040', 'Arduino', 'C/C#', 'PCB', 'IoT'] },
    ],

    realisations: [
        { titre: 'Clando Ga',       description: 'Application mobile et identité visuelle pour une startup gabonaise de transport urbain.',  categories: ['Branding', 'UI/UX', 'Mobile'],  vignette: '/illustrations/clandoga.jpg',   images: ['/images/clando1.jpg', '/images/clando2.jpg', '/images/clando3.gif'] },
        { titre: 'CrimSun',       description: 'Une solution IoT de a à z pour pallier au réveil brutal d\'une alarme, un réveil lumineux simulateur d\'aube.',                  categories: ['C', 'IoT', 'Arduino'],     vignette: '/images/crimsun_img.png',           images: ['/images/crimsun_1.png', '/images/crimsun_2.png', '/images/crimsun_img.png'] },
        { titre: 'CRAPH Libreville', description: "Site web institutionnel pour un centre de rééducation et d'appareillage à Libreville.",    categories: ['Web', 'HTML', 'CSS'],           vignette: '/images/craph_img.jpg', images: ['/images/craph_img.jpg', '/images/craph_1.jpg', '/images/craph_2.jpg'] },
        { titre: 'Claie Net Précis',     description: "Présence digitale complète pour un média dissident.",                             categories: ['Web', 'React', 'Branding'],     vignette: '/images/clairnet1.png',           images: ['/images/clairnet2.png', '/images/clairnet3.png', '/images/clairnet4.png', '/images/clairnet1.png'] },
    ],

    /* Avis clients — à remplacer par de vrais avis quand disponibles */
    avis: [
        { nom: 'Arthur N.',     source: 'Google',      note: 5, texte: "Travail soigné, livré dans les délais. Beyond 31 a su capter l'essence de notre projet dès le premier échange. Je recommande sans hésiter." },
        { nom: 'Anatole',       source: 'Trustpilot',  note: 5, texte: "Efficacité et expertise au top" },
        { nom: 'Huriel CrimSun.',    source: 'Google',      note: 5, texte: "Réactif, professionnel et de bon conseil. Le résultat final est élégant et parfaitement fonctionnel. Très bonne expérience." },
        { nom: 'Thomas R.',     source: 'Trustpilot',  note: 5, texte: "Au-delà du design, il y a une vraie compréhension des enjeux business. Le projet a été livré rapidement avec une qualité bluffante." },
        { nom: 'Chloé M.',      source: 'Google',      note: 5, texte: "J'avais une idée vague, il l'a transformée en identité forte. Exactement ce dont j'avais besoin pour lancer mon activité." },
    ],

    /* Logos réalisations pour le carrousel du footer */
    logosClients: [
        { nom: 'Clando Ga',   src: '/images/clando1.jpg' },
        { nom: 'CRAPH',       src: '/images/craph_img.jpg' },
        { nom: 'CrimSun', src: '/images/crimsun_img.png' },
        { nom: 'Clair Net Précis',   src: '/images/clair_net1.jpg' },
    ],
};

/* ============================================================
   COMPOSANT : Orb — lumière spatiale douce
   ============================================================ */
function Orb({ x, y, size, color, blur, opacity = 1 }) {
    return (
        <div style={{
            position: 'absolute', left: x, top: y,
            width: size, height: size, borderRadius: '50%',
            background: color, filter: `blur(${blur}px)`,
            opacity, pointerEvents: 'none', zIndex: 0,
        }} />
    );
}

/* ============================================================
   COMPOSANT : StarRating — étoiles dorées
   ============================================================ */
function StarRating({ note }) {
    return (
        <div style={{ display: 'flex', gap: 2 }}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < note ? C.gold : C.muted}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

/* ============================================================
   COMPOSANT : SourceBadge — logo de la plateforme d'avis
   ============================================================ */
function SourceBadge({ source }) {
    const isGoogle = source === 'Google';
    return (
        <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            padding: '.18rem .55rem', borderRadius: 20,
            background: isGoogle ? 'rgba(66,133,244,.1)' : 'rgba(0,182,122,.1)',
            border: `1px solid ${isGoogle ? 'rgba(66,133,244,.2)' : 'rgba(0,182,122,.2)'}`,
        }}>
            {isGoogle ? (
                /* G de Google simplifié */
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
            ) : (
                /* TP de Trustpilot */
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#00B67A">
                    <path d="M12 2l2.75 8.46H23l-6.87 4.98L18.88 22 12 17.02 5.12 22l2.75-6.56L1 10.46h8.25z"/>
                </svg>
            )}
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.6rem', fontWeight: 500, color: isGoogle ? '#4285F4' : '#00B67A', letterSpacing: '.04em' }}>{source}</span>
        </div>
    );
}

/* ============================================================
   COMPOSANT : BandeauSocial
   Carrousel infini : logos réalisations + avis clients intercalés
   ============================================================ */
function BandeauSocial() {
    /* On alterne : logo projet — avis — logo projet — avis … */
    const items = [];
    config.avis.forEach((avis, i) => {
        if (config.logosClients[i]) items.push({ type: 'logo', data: config.logosClients[i] });
        items.push({ type: 'avis', data: avis });
    });
    /* On double pour le marquee infini */
    const doubled = [...items, ...items];

    return (
        <div style={{ overflow: 'hidden', position: 'relative', padding: '1.5rem 0' }}>
            {/* Fondu sur les bords */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: `linear-gradient(to right, ${C.deep}, transparent)`, zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: `linear-gradient(to left, ${C.deep}, transparent)`, zIndex: 2, pointerEvents: 'none' }} />

            <div style={{ display: 'flex', gap: '1.2rem', animation: 'marquee 40s linear infinite', width: 'max-content', alignItems: 'center' }}>
                {doubled.map((item, i) => {
                    if (item.type === 'logo') {
                        return (
                            <div key={i} style={{
                                flexShrink: 0, width: 120, height: 70,
                                background: C.surface, borderRadius: 10,
                                border: `1px solid ${C.line}`,
                                overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <img src={item.data.src} alt={item.data.nom} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: .5, filter: 'grayscale(1)', transition: 'opacity .3s, filter .3s' }}
                                     onMouseEnter={e => { e.target.style.opacity = '.9'; e.target.style.filter = 'grayscale(0)'; }}
                                     onMouseLeave={e => { e.target.style.opacity = '.5'; e.target.style.filter = 'grayscale(1)'; }}
                                />
                            </div>
                        );
                    }
                    /* Carte avis */
                    const avis = item.data;
                    return (
                        <div key={i} className="c-avis">
                            {/* En-tête : étoiles + plateforme */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.75rem' }}>
                                <StarRating note={avis.note} />
                                <SourceBadge source={avis.source} />
                            </div>
                            {/* Texte de l'avis */}
                            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontStyle: 'italic', fontSize: '.82rem', color: C.prose, lineHeight: 1.75, marginBottom: '.85rem' }}>
                                "{avis.texte}"
                            </p>
                            {/* Auteur */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 28, height: 28, borderRadius: '50%', background: C.goldDim, border: `1px solid ${C.goldBrd}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '.7rem', color: C.gold }}>{avis.nom[0]}</span>
                                </div>
                                <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: '.78rem', color: C.star }}>{avis.nom}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* ============================================================
   COMPOSANT : ModalCarousel
   ============================================================ */
function ModalCarousel({ realisation, onClose }) {
    const [idx, setIdx] = useState(0);
    const n = realisation.images.length;
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .18 }}
                    onClick={onClose}
                    style={{ position: 'fixed', inset: 0, background: 'rgba(6,9,15,.97)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: .2 }}
                        onClick={e => e.stopPropagation()} style={{ maxWidth: 900, width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: '.85rem', color: C.prose }}>{realisation.titre}</p>
                    <button className="btn-s" onClick={onClose} style={{ padding: '.35rem .85rem', fontSize: '.74rem' }}>Fermer</button>
                </div>
                <div style={{ borderRadius: 10, overflow: 'hidden', position: 'relative', background: C.surface, border: `1px solid ${C.line}` }}>
                    <img src={realisation.images[idx]} alt={realisation.titre} style={{ width: '100%', maxHeight: '72vh', objectFit: 'contain', display: 'block' }} />
                    {n > 1 && (
                        <>
                            <button className="btn-s" onClick={() => setIdx((idx - 1 + n) % n)} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', padding: '.38rem .8rem' }}>‹</button>
                            <button className="btn-s" onClick={() => setIdx((idx + 1) % n)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', padding: '.38rem .8rem' }}>›</button>
                        </>
                    )}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 12 }}>
                    {realisation.images.map((_, i) => (
                        <div key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 18 : 5, height: 4, borderRadius: 2, background: i === idx ? C.gold : C.line, transition: 'width .2s, background .2s', cursor: 'pointer' }} />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ============================================================
   COMPOSANT : ServiceCard
   ============================================================ */
function ServiceCard({ service, index }) {
    return (
        <motion.div className="c-svc"
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: index * .07 }}>
            <div style={{ height: 175, overflow: 'hidden', position: 'relative' }}>
                <img src={service.illustration} alt={service.titre} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: .65 }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${C.surface}, transparent 55%)` }} />
            </div>
            <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '1.05rem', color: C.star, marginBottom: '.45rem' }}>{service.titre}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.84rem', color: C.prose, lineHeight: 1.82, marginBottom: '.95rem' }}>{service.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem' }}>
                    {service.motsCles.map((m, i) => <span key={i} className="tag">{m}</span>)}
                </div>
            </div>
        </motion.div>
    );
}

/* ============================================================
   COMPOSANT : ProjectCard
   ============================================================ */
function ProjectCard({ projet, onClick }) {
    return (
        <motion.div className="c-prj"
                    initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}
                    onClick={onClick}>
            <div style={{ height: 210, overflow: 'hidden', position: 'relative' }}>
                <img src={projet.vignette} alt={projet.titre} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: .78 }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${C.surface} 0%, rgba(6,9,15,.15) 55%)` }} />
                <div style={{ position: 'absolute', bottom: 13, right: 13, width: 28, height: 28, borderRadius: '50%', background: C.gold, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '.82rem', color: C.void }}>↗</span>
                </div>
            </div>
            <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '1rem', color: C.star, marginBottom: '.28rem' }}>{projet.titre}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.82rem', color: C.prose, lineHeight: 1.75, marginBottom: '.82rem' }}>{projet.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.28rem' }}>
                    {projet.categories.map((c, i) => <span key={i} className="tag">{c}</span>)}
                </div>
            </div>
        </motion.div>
    );
}

/* ============================================================
   COMPOSANT : Footer
   ============================================================ */
function Footer() {
    return (
        <footer style={{ background: C.void, borderTop: `1px solid ${C.line}`, paddingTop: '2.5rem', overflow: 'hidden', position: 'relative' }}>
            <div className="stars" style={{ opacity: .3 }} />
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2.5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', paddingBottom: '2.5rem', borderBottom: `1px solid ${C.line}` }}>

                    <div>
                        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.7rem', color: C.star, lineHeight: 1.05, marginBottom: '.85rem' }}>
                            Beyond <span style={{ color: C.gold }}>31</span>
                        </p>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.85rem', color: C.prose, lineHeight: 1.85, maxWidth: 280, marginBottom: '1.4rem' }}>
                            Du design au code, de l'interface à l'embarqué — nous construisons des solutions qui n'existent pas encore.
                        </p>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontStyle: 'italic', fontSize: '.82rem', color: C.muted, lineHeight: 1.8, borderLeft: `1px solid ${C.goldBrd}`, paddingLeft: '.85rem' }}>
                            "Soyez satisfaits, ou nous recommençons."
                        </p>
                    </div>

                    <div>
                        <p className="s-lbl" style={{ marginBottom: '.95rem' }}>Navigation</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
                            {[['#accueil', 'Accueil'], ['#services', 'Services'], ['#realisations', 'Réalisations'], ['/contact', 'Contact']].map(([h, l]) => (
                                <a key={h} href={h} className="nav-l">{l}</a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="s-lbl" style={{ marginBottom: '.95rem' }}>Contact</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.83rem', color: C.prose }}>{config.adresse}</p>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.83rem', color: C.prose }}>{config.telephone}</p>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.83rem', color: C.gold }}>{config.email}</p>
                            <a href={config.reseaux.instagram} target="_blank" rel="noopener noreferrer" className="btn-s" style={{ fontSize: '.7rem', padding: '.44rem 1rem', marginTop: '.5rem', width: 'fit-content' }}>Instagram</a>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 0', flexWrap: 'wrap', gap: '.7rem' }}>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.62rem', color: C.muted, letterSpacing: '.05em' }}>© 2026 Beyond 31. Tous droits réservés.</p>
                    <div style={{ display: 'flex', gap: '1.4rem' }}>
                        {[['Politique de confidentialité', '/politique-de-confidentialite.html'], ['Mentions légales', '/mentions-legales.html']].map(([l, h]) => (
                            <a key={h} href={h}
                               style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.62rem', color: C.muted, transition: 'color .18s', letterSpacing: '.05em', textDecoration: 'none', textTransform: 'uppercase' }}
                               onMouseEnter={e => e.target.style.color = C.prose}
                               onMouseLeave={e => e.target.style.color = C.muted}>{l}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ============================================================
   PAGE PRINCIPALE
   ============================================================ */
export default function Home() {
    const [selected, setSelected] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
    const hdrOpacity = useTransform(scrollYProgress, [0, .06], [1, 0]);
    const hdrY       = useTransform(scrollYProgress, [0, .06], [0, -44]);
    const orbY       = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const h2style = (max = '3rem') => ({
        fontFamily: 'Outfit, sans-serif', fontWeight: 700,
        fontSize: `clamp(1.7rem, 4vw, ${max})`,
        color: C.star, lineHeight: 1.1, marginBottom: '1.1rem',
    });

    /* Liens du menu mobile avec icône et description */
    const mobileLinks = [
        { href: '#accueil',      label: 'Accueil',       icon: '', desc: 'Retour au début' },
        { href: '#services',     label: 'Services',      icon: '',  desc: 'Ce que nous faisons' },
        { href: '#realisations', label: 'Réalisations',  icon: '',  desc: 'Nos projets récents' },
        { href: '/contact', label: 'Contact',       icon: '✉',  desc: 'Parlons de votre projet' },
    ];

    return (
        <div ref={containerRef} style={{ background: C.void, color: C.prose, minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* ══════════════════════════════════════
          HEADER
          ══════════════════════════════════════ */}
            <motion.header style={{
                opacity: hdrOpacity, y: hdrY,
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
                background: 'rgba(6,9,15,.9)', backdropFilter: 'blur(20px)',
                borderBottom: `1px solid ${C.line}`,
            }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '.9rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <div style={{ width: 100 }}>
                        <img src={config.logoLight} alt={config.nomAgence} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    {/* Nav desktop */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        {[['#accueil', 'Accueil'], ['#services', 'Services'], ['#realisations', 'Réalisations'], ['/contact', 'Contact']].map(([href, label]) => (
                            <a key={href} href={href} className="nav-l">{label}</a>
                        ))}
                        <a href="#contact" className="btn-p" style={{ marginLeft: '.25rem', padding: '.58rem 1.4rem', fontSize: '.74rem' }}>Devis gratuit</a>
                    </nav>

                    {/* Hamburger texte pur */}
                    <button onClick={() => setMenuOpen(!menuOpen)}
                            style={{ background: 'none', border: 'none', color: C.prose, cursor: 'pointer', fontSize: '1.1rem', lineHeight: 1, padding: '.3rem', transition: 'color .18s' }}
                            onMouseEnter={e => e.currentTarget.style.color = C.star}
                            onMouseLeave={e => e.currentTarget.style.color = C.prose}
                            aria-label="Menu"
                    >{menuOpen ? '✕' : '☰'}</button>
                </div>

                {/* Menu mobile — enrichi avec icônes et description */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: .22 }}
                                    style={{ overflow: 'hidden', background: C.deep, borderTop: `1px solid ${C.line}` }}>
                            <div style={{ padding: '1rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '.25rem' }}>
                                {mobileLinks.map(({ href, label, icon, desc }) => (
                                    <a key={href} href={href} className="nav-mobile" onClick={() => setMenuOpen(false)}>
                                        <div className="nav-mobile-icon">
                                            <span style={{ fontSize: '.85rem' }}>{icon}</span>
                                        </div>
                                        <div>
                                            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.95rem', fontWeight: 500, color: C.star, lineHeight: 1.2 }}>{label}</p>
                                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.72rem', fontWeight: 300, color: C.muted, marginTop: 1 }}>{desc}</p>
                                        </div>
                                    </a>
                                ))}
                                {/* CTA dans le menu mobile */}
                                <div style={{ marginTop: '.75rem', paddingTop: '.75rem', borderTop: `1px solid ${C.line}` }}>
                                    <a href="#contact" className="btn-p" style={{ width: '100%', justifyContent: 'center', fontSize: '.82rem' }} onClick={() => setMenuOpen(false)}>
                                        Demander un devis gratuit
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            <main>

                {/* ══════════════════════════════════════
            HERO
            ══════════════════════════════════════ */}
                <section id="accueil" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div className="stars" />
                    <motion.div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, y: orbY }}>
                        <Orb x="58%"  y="-18%" size={620} color="rgba(37,55,130,.16)"  blur={140} />
                        <Orb x="-12%" y="38%"  size={420} color="rgba(201,170,82,.06)" blur={125} />
                        <Orb x="70%"  y="52%"  size={360} color="rgba(20,35,90,.18)"   blur={105} />
                    </motion.div>

                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2.5rem', paddingTop: '9rem', paddingBottom: '7rem', position: 'relative', zIndex: 3, width: '100%' }}>
                        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [.25, .1, .25, 1] }}>

                            <p className="s-lbl">Agence créative et technologique</p>

                            {/* Nom — monumental */}
                            <h1 style={{
                                fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                                fontSize: 'clamp(4rem, 11vw, 10rem)',
                                lineHeight: .92, letterSpacing: '-.04em', color: C.star, marginBottom: '1rem',
                            }}>
                                Beyond<br /><span style={{ color: C.gold }}>31</span>
                            </h1>

                            {/* Slogan — séparé visuellement du titre */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.9rem' }}>
                                <div style={{ width: 28, height: 1, background: C.goldBrd, flexShrink: 0 }} />
                                <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, fontSize: 'clamp(.9rem, 1.8vw, 1.1rem)', color: C.prose, letterSpacing: '.02em', opacity: .8 }}>
                                    {config.slogan}
                                </p>
                            </div>

                            {/* Vision */}
                            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.9rem', color: C.muted, lineHeight: 1.9, maxWidth: 420, marginBottom: '2.8rem' }}>
                                Du design au code, de l'interface à l'embarqué — nous construisons
                                des solutions qui n'existent pas encore.
                            </p>

                            {/* CTA */}
                            <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '4.5rem' }}>
                                <a href="#services"     className="btn-p">Nos services</a>
                                <a href="#realisations" className="btn-s">Réalisations</a>
                            </div>

                            {/* Stats */}
                            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', paddingTop: '2rem', borderTop: `1px solid ${C.line}` }}>
                                {[['100 %', 'Satisfaction'], ['4', 'Expertises'], ['∞', 'Ambition']].map(([val, lbl]) => (
                                    <div key={lbl}>
                                        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '1.55rem', color: C.gold, marginBottom: '.08rem', letterSpacing: '-.01em' }}>{val}</p>
                                        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.62rem', fontWeight: 300, color: C.muted, letterSpacing: '.12em', textTransform: 'uppercase' }}>{lbl}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
            BANDEAU SOCIAL — logos + avis
            ══════════════════════════════════════ */}
                <section style={{ background: C.deep, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, position: 'relative' }}>
                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2.5rem 2.5rem 1rem', position: 'relative', zIndex: 2 }}>
                        <p className="s-lbl" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Ils nous ont fait confiance</p>
                    </div>
                    <BandeauSocial />
                    <div style={{ height: '1.5rem' }} />
                </section>

                {/* ══════════════════════════════════════
            À PROPOS
            ══════════════════════════════════════ */}
                <section id="a-propos" style={{ background: C.deep, position: 'relative', overflow: 'hidden' }}>
                    <div className="stars" style={{ opacity: .25 }} />
                    <Orb x="80%" y="-20%" size={500} color="rgba(201,170,82,.05)" blur={130} />

                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>

                        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
                            <p className="s-lbl">À propos</p>
                            <h2 style={h2style('3.2rem')}>
                                Une vision,<br /><span style={{ color: C.gold }}>une passion</span>
                            </h2>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.9rem', color: C.prose, lineHeight: 1.9, marginBottom: '1.2rem' }}>
                                Beyond 31 est née d'un besoin simple : rendre le numérique accessible à ceux qui ont de vraies idées. Design, développement web, identité de marque — nous accompagnons les entrepreneurs et les entreprises avec soin, de la première esquisse au projet livré.
                            </p>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.9rem', color: C.prose, lineHeight: 1.9, marginBottom: '1.5rem', borderLeft: `1px solid ${C.goldBrd}`, paddingLeft: '1rem' }}>
                                L'ambition va plus loin : programmer des microcontrôleurs, concevoir des circuits électroniques, créer des objets connectés — là où le logiciel rencontre le monde physique.
                            </p>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontStyle: 'italic', fontSize: '.88rem', color: C.muted, lineHeight: 1.8 }}>
                                "Nous sommes aux petits soins avec nos clients."
                            </p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: .97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .7 }} style={{ position: 'relative' }}>
                            {/* Coins discrets */}
                            {[
                                { top: -8, left: -8, borderTop: `1px solid ${C.goldBrd}`, borderLeft: `1px solid ${C.goldBrd}` },
                                { top: -8, right: -8, borderTop: `1px solid ${C.goldBrd}`, borderRight: `1px solid ${C.goldBrd}` },
                                { bottom: -8, left: -8, borderBottom: `1px solid ${C.goldBrd}`, borderLeft: `1px solid ${C.goldBrd}` },
                                { bottom: -8, right: -8, borderBottom: `1px solid ${C.goldBrd}`, borderRight: `1px solid ${C.goldBrd}` },
                            ].map((st, i) => <div key={i} style={{ position: 'absolute', width: 20, height: 20, ...st }} />)}

                            <div style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '4/5', border: `1px solid ${C.line}` }}>
                                <img src="/images/logo_team.png" alt="Équipe Beyond" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: .82 }} />
                            </div>

                            {/* Badge flottant */}
                            <div style={{
                                position: 'absolute', bottom: -14, left: -14,
                                background: C.gold, color: C.void, borderRadius: 10,
                                padding: '.8rem 1.1rem', boxShadow: '0 6px 24px rgba(201,170,82,.18)',
                                animation: 'drift 3.5s ease-in-out infinite',
                            }}>
                                <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.2rem', lineHeight: 1 }}>31</p>
                                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '.54rem', fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', marginTop: 3 }}>jours max</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
            SERVICES
            ══════════════════════════════════════ */}
                <section id="services" style={{ background: C.void, position: 'relative', overflow: 'hidden' }}>
                    <div className="stars" style={{ opacity: .2 }} />
                    <Orb x="-8%" y="30%" size={450} color="rgba(37,55,130,.12)" blur={120} />

                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 2.5rem', position: 'relative', zIndex: 2 }}>
                        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>
                            <p className="s-lbl">Expertises</p>
                            <h2 style={h2style('3.2rem')}>Nos <span style={{ color: C.gold }}>expertises</span></h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.1rem', marginTop: '2.5rem' }}>
                                {config.services.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
            RÉALISATIONS
            ══════════════════════════════════════ */}
                <section id="realisations" style={{ background: C.deep, position: 'relative', overflow: 'hidden' }}>
                    <div className="stars" style={{ opacity: .22 }} />

                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 2.5rem', position: 'relative', zIndex: 2 }}>
                        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>
                            <p className="s-lbl">Portfolio</p>
                            <h2 style={h2style('3.2rem')}>Récentes <span style={{ color: C.gold }}>réalisations</span></h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(265px, 1fr))', gap: '1.1rem', marginTop: '2.5rem' }}>
                                {config.realisations.map((r, i) => <ProjectCard key={i} projet={r} onClick={() => setSelected(r)} />)}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
            CTA DEVIS
            ══════════════════════════════════════ */}
                <section id="contact" style={{ background: C.void, position: 'relative', overflow: 'hidden' }}>
                    <div className="stars" />
                    <Orb x="28%"  y="8%"   size={600} color="rgba(37,55,130,.13)"  blur={145} />
                    <Orb x="55%"  y="48%"  size={350} color="rgba(201,170,82,.05)" blur={115} />

                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '10rem 2.5rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
                            <p className="s-lbl" style={{ textAlign: 'center' }}>Commençons</p>
                            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(2.2rem, 6vw, 5rem)', color: C.star, lineHeight: 1.05, letterSpacing: '-.025em', marginBottom: '.85rem' }}>
                                Vous avez une idée ?<br /><span style={{ color: C.gold }}>Parlons-en.</span>
                            </h2>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.9rem', color: C.prose, maxWidth: 380, margin: '0 auto 2.5rem', lineHeight: 1.88 }}>
                                Un premier échange suffit pour savoir si on peut faire quelque chose de grand ensemble. C'est gratuit, sans engagement.
                            </p>
                            <a href="/Devis" className="btn-p" style={{ fontSize: '.84rem', padding: '.95rem 2.6rem' }}>
                                Demander un devis
                            </a>
                        </motion.div>
                    </div>
                </section>
            </main>

            <AnimatePresence>
                {selected && <ModalCarousel realisation={selected} onClose={() => setSelected(null)} />}
            </AnimatePresence>

            <Footer />
        </div>
    );
}