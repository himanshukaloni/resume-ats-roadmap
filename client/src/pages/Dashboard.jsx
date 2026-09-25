import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, Clock3, FileSearch, Layers3, Sparkles, Target } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import GlowButton from '../components/ui/GlowButton';
import MetricCard from '../components/ui/MetricCard';
import GlassCard from '../components/ui/GlassCard';
import SectionHeader from '../components/ui/SectionHeader';
import PageAtmosphere from '../components/common/PageAtmosphere';
import Reveal from '../components/common/Reveal';

export default function Dashboard(){
 const {user}=useAuth();
 return <div className="app-page dashboard-page"><PageAtmosphere density="high"/>
  <div className="content-shell">
   <SectionHeader eyebrow="CAREER INTELLIGENCE" title={<>Build a resume that <em>moves you forward.</em></>} description="Your workspace for ATS analysis, skill gaps, and a focused career roadmap." action={<Link to="/analyze"><GlowButton><FileSearch size={18}/> Analyze resume <ArrowUpRight size={17}/></GlowButton></Link>}/>
   <div className="metric-grid">
    <MetricCard icon={Target} label="ATS readiness" value="Ready" detail="Analyze a resume to begin" index={0}/>
    <MetricCard icon={Layers3} label="Roadmap engine" value="Personalized" detail="Role-aware skill planning" index={1}/>
    <MetricCard icon={BarChart3} label="Analysis model" value="Explainable" detail="See why your score changes" index={2}/>
   </div>
   <div className="dashboard-grid">
    <Reveal className="dashboard-main"><GlassCard className="command-card"><div className="card-topline"><span className="status-dot"/> YOUR NEXT MOVE <span>01</span></div><div className="command-content"><div><h2>Upload your current resume.</h2><p>We turn your document into a clear signal map: ATS score, detected strengths, missing skills, and the exact areas worth improving.</p><div className="command-actions"><Link to="/analyze" className="text-action">Start analysis <ArrowUpRight size={16}/></Link><Link to="/history" className="subtle-action">View history</Link></div></div><div className="floating-preview"><div className="preview-head"><span>RESUME SIGNAL</span><b>SCAN</b></div><div className="preview-lines"><i/><i/><i className="short"/><i/><i className="mid"/></div><div className="preview-score"><strong>--</strong><span>ATS SCORE</span></div></div></div></GlassCard></Reveal>
    <Reveal><GlassCard className="insight-card"><div className="card-topline">HOW IT WORKS</div><div className="timeline"><div><b>01</b><span>Upload</span><small>PDF or DOCX</small></div><div><b>02</b><span>Analyze</span><small>ATS + skills</small></div><div><b>03</b><span>Act</span><small>Roadmap</small></div></div><div className="mini-note"><Sparkles size={16}/><span>Designed around your target role, not generic resume advice.</span></div></GlassCard></Reveal>
   </div>
   <Reveal><GlassCard className="lower-banner"><div><span className="eyebrow">RESUME EVOLUTION</span><h3>One document. A much clearer next step.</h3><p>Run multiple analyses over time and compare how your resume gets closer to the role you want.</p></div><Clock3 size={38}/></GlassCard></Reveal>
  </div>
 </div>
}
