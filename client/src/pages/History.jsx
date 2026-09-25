import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CalendarDays, ChevronRight, FileText, Search } from 'lucide-react';
import { resumeService } from '../services/resumeService';
import PageAtmosphere from '../components/common/PageAtmosphere';
import GlassCard from '../components/ui/GlassCard';
import GlowButton from '../components/ui/GlowButton';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/common/Reveal';

export default function History(){
 const [items,setItems]=useState([]); useEffect(()=>{resumeService.history().then(r=>setItems(r.data.analyses||[])).catch(()=>{})},[]);
 return <div className="app-page history-page"><PageAtmosphere/><div className="content-shell">
  <SectionHeader eyebrow="ANALYSIS ARCHIVE" title={<>Your resume, <em>over time.</em></>} description="Every scan stays here so you can see how your resume evolves." action={<Link to="/analyze"><GlowButton>New analysis <ArrowUpRight size={17}/></GlowButton></Link>}/>
  {items.length?<div className="history-stack">{items.map((x,i)=><Reveal key={x._id}><Link to={`/roadmap/${x._id}`}><GlassCard className="history-item"><div className="history-left"><div className="history-file"><FileText size={20}/></div><div><h3>{x.fileName}</h3><p><CalendarDays size={13}/> {new Date(x.createdAt).toLocaleDateString()} <span>·</span> {x.targetRole}</p></div></div><div className="history-score"><span>ATS</span><b>{x.atsScore}</b><ChevronRight size={18}/></div></GlassCard></Link></Reveal>)}</div>:<Reveal><GlassCard className="empty-state"><div className="empty-icon"><Search/></div><h2>Your archive is empty.</h2><p>Upload your first resume and your analysis history will appear here.</p><Link to="/analyze" className="text-action">Run your first scan <ArrowUpRight size={16}/></Link></GlassCard></Reveal>}
 </div></div>
}
