import { useEffect,useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ChevronRight, CircleAlert, Clock3, FileText, Target } from 'lucide-react';
import { resumeService } from '../services/resumeService';
import PageAtmosphere from '../components/common/PageAtmosphere';
import GlassCard from '../components/ui/GlassCard';
import ScoreRing from '../components/ui/ScoreRing';
import Reveal from '../components/common/Reveal';

export default function Roadmap(){
 const {id}=useParams(); const [a,setA]=useState(null);
 useEffect(()=>{resumeService.get(id).then(r=>setA(r.data.analysis)).catch(()=>setA(null))},[id]);
 if(!a)return <div className="screen-loader">Building your analysis...</div>;
 return <div className="app-page results-page"><PageAtmosphere density="high"/><div className="content-shell">
  <Reveal><div className="results-hero"><div><div className="eyebrow">ANALYSIS COMPLETE / {a.targetRole}</div><h1>Your resume has<br/><em>a direction now.</em></h1><p>{a.summary}</p><div className="file-chip"><FileText size={15}/>{a.fileName}</div></div><ScoreRing score={a.atsScore}/></div></Reveal>
  <div className="result-grid"><Reveal><GlassCard className="score-card"><div className="card-topline">ATS SIGNAL <span>01</span></div><div className="score-row"><div><strong>{a.atsScore}</strong><span>/ 100</span></div><div className="score-copy">{a.atsScore>=80?'Strong role alignment':a.atsScore>=60?'Solid foundation':'Needs targeted improvement'}<small>Based on structure, keywords and detected role skills.</small></div></div><div className="score-bar"><motion.i initial={{width:0}} animate={{width:`${a.atsScore}%`}} transition={{duration:1}}/></div></GlassCard></Reveal>
  <Reveal><GlassCard><div className="card-topline">SKILL COVERAGE <span>02</span></div><div className="coverage-number"><b>{a.skills?.length||0}</b><span>matched skills</span></div><div className="chips">{a.skills?.map(s=><span key={s}>{s}</span>)}</div></GlassCard></Reveal>
  <Reveal><GlassCard><div className="card-topline">GAPS TO CLOSE <span>03</span></div><div className="coverage-number"><b>{a.missingSkills?.length||0}</b><span>priority gaps</span></div><div className="chips">{a.missingSkills?.map(s=><span className="neutral-warn" key={s}>{s}</span>)}</div></GlassCard></Reveal></div>
  <Reveal><div className="roadmap-title"><div><div className="eyebrow">YOUR NEXT 12 WEEKS</div><h2>A roadmap built from the gaps.</h2></div><Target size={28}/></div></Reveal>
  <div className="roadmap-list">{a.roadmap?.map((w,i)=><Reveal key={i}><GlassCard className="roadmap-item"><div className="roadmap-index">0{i+1}</div><div className="roadmap-body"><div className="roadmap-meta"><span>WEEK {i+1}</span><small><Clock3 size={14}/> Focus block</small></div><h3>{w.title}</h3><p>{w.goal}</p><ul>{w.tasks?.map(t=><li key={t}><CheckCircle2 size={16}/>{t}</li>)}</ul></div><ChevronRight className="roadmap-arrow"/></GlassCard></Reveal>)}</div>
  <Link to="/history" className="result-footer-link">View your analysis history <ArrowUpRight size={16}/></Link>
 </div></div>
}
