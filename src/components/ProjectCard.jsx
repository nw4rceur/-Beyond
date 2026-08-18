import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
export default function ProjectCard({p,large=false}){return <motion.article className={`project-card ${large?'project-card--large':''}`} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-8%'}} transition={{duration:.65,ease:[.2,.8,.2,1]}}>
 <Link to={`/projets/${p.slug}`} className="project-hit"><div className="project-top"><span className="mono">{p.index} / {p.year}</span><span>{p.kind}</span></div><div className="project-art" style={{'--accent':p.accent,'--deep':p.dark}}><span className="art-index">{p.index}</span><div className="art-word">{p.name}</div><div className="art-scan"/><div className="art-orbit">BEYOND31 · BUILD · TEST · LEARN ·</div></div><div className="project-bottom"><div><h3>{p.name}</h3><p>{p.headline}</p></div><span className="arrow">↗</span></div></Link>
 </motion.article>}
