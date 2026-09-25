import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ArrowRight, BarChart3, Check, FileText, LockKeyhole, Sparkles, Target, Upload, WandSparkles } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/common/AnimatedBackground";
import Reveal from "../components/ui/Reveal";
import SpotlightCard from "../components/ui/SpotlightCard";
import GlowButton from "../components/ui/GlowButton";

function ScorePreview() {
  return (
    <div className="score-preview">
      <div className="preview-topline"><span>RESUME ANALYSIS</span><span className="live-dot"><i /> LIVE PREVIEW</span></div>
      <div className="preview-main">
        <div className="score-dial"><div><strong>87</strong><small>/100</small></div></div>
        <div className="score-copy"><span className="tiny-label">ATS MATCH</span><h3>Strong foundation</h3><p>Skills and structure are aligned. A few targeted improvements can increase role match.</p></div>
      </div>
      <div className="meter-list">
        {[['Keywords', 91], ['Structure', 86], ['Skills', 82]].map(([label, value]) => (
          <div className="meter" key={label}><div><span>{label}</span><b>{value}%</b></div><span className="meter-track"><i style={{ width: `${value}%` }} /></span></div>
        ))}
      </div>
    </div>
  );
}

function RoadmapPreview() {
  const rows = [['Spring Boot', 'Build'], ['REST APIs', 'Practice'], ['MySQL', 'Strengthen']];
  return <div className="roadmap-preview">
    <div className="preview-topline"><span>PERSONAL ROADMAP</span><span>12 WEEKS</span></div>
    <div className="roadmap-line" />
    {rows.map(([skill, action], i) => <motion.div className="roadmap-row" key={skill} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .12 }}><span className="week-number">0{i + 1}</span><div><b>{skill}</b><small>{action} · Resume-ready evidence</small></div><Check size={16} /></motion.div>)}
  </div>;
}

export default function Landing() {
  const { user } = useAuth();
  const uploadPath = user ? "/analyze" : "/register?next=analyze";
  const loginPath = user ? "/dashboard" : "/login?next=analyze";
  return <div className="landing-page">
    <AnimatedBackground />
    <header className="site-nav">
      <Link to="/" className="brand"><span className="brand-mark"><Sparkles size={17} /></span>ResumePilot</Link>
      <nav className="desktop-nav"><a href="#how">How it works</a><a href="#features">Features</a><a href="#roadmap">Roadmap</a></nav>
      <div className="nav-actions"><Link to={loginPath} className="login-link">Log in</Link><Link to={uploadPath} className="nav-cta">Get started <ArrowRight size={15}/></Link></div>
    </header>

    <main>
      <section className="hero-section container-wide">
        <div className="hero-copy">
          <Reveal><div className="eyebrow-pill"><span>01</span> RESUME INTELLIGENCE FOR YOUR NEXT MOVE</div></Reveal>
          <Reveal delay={.08}><h1>Make your resume <em>work harder.</em></h1></Reveal>
          <Reveal delay={.14}><p className="hero-lead">Upload your resume. See how an ATS reads it. Find the gaps that matter for your target role — then get a focused roadmap to close them.</p></Reveal>
          <Reveal delay={.2}><div className="hero-actions"><Link to={uploadPath}><GlowButton>Upload my resume <Upload size={17}/></GlowButton></Link><a href="#how" className="text-action">See how it works <ArrowRight size={16}/></a></div></Reveal>
          <Reveal delay={.26}><div className="trust-row"><span><LockKeyhole size={14}/> Private workspace</span><span><FileText size={14}/> PDF & DOCX</span><span><Target size={14}/> Role-specific</span></div></Reveal>
        </div>
        <Reveal delay={.18} className="hero-visual-wrap"><div className="hero-visual"><div className="visual-window"><div className="window-bar"><span className="window-title"><i /> ResumePilot analysis</span><span>● ● ●</span></div><ScorePreview /><div className="floating-chip chip-one"><BarChart3 size={15}/> 3 key gaps found</div><div className="floating-chip chip-two"><WandSparkles size={15}/> Roadmap ready</div></div></div></Reveal>
      </section>

      <section className="ticker"><div className="ticker-track">ATS ANALYSIS <span>✦</span> SKILL GAPS <span>✦</span> ROLE MATCH <span>✦</span> CAREER ROADMAP <span>✦</span> ATS ANALYSIS <span>✦</span> SKILL GAPS <span>✦</span> ROLE MATCH <span>✦</span> CAREER ROADMAP <span>✦</span></div></section>

      <section id="how" className="section container-wide">
        <Reveal><div className="section-kicker">HOW IT WORKS</div><h2>One upload. <span>Three useful answers.</span></h2><p className="section-sub">No generic career advice. ResumePilot turns what is already in your resume into specific next steps.</p></Reveal>
        <div className="step-grid">
          {[['01','Upload','Drop your PDF or DOCX resume into your private workspace.'],['02','Understand','Get a transparent ATS score, skill match and improvement signals.'],['03','Build','Follow a role-specific roadmap with practical skills and projects.']].map(([n,t,d],i)=><Reveal key={n} delay={i*.08}><SpotlightCard className="step-card"><span className="step-no">{n}</span><h3>{t}</h3><p>{d}</p><div className="step-line" /></SpotlightCard></Reveal>)}
        </div>
      </section>

      <section id="features" className="section container-wide feature-showcase">
        <Reveal><div className="section-kicker">BUILT FOR ACTION</div><h2>Not just an ATS score.</h2><p className="section-sub">Every result is designed to tell you what to do next.</p></Reveal>
        <div className="feature-grid-advanced">
          <Reveal className="feature-large"><SpotlightCard><div className="card-icon"><BarChart3/></div><span className="card-kicker">01 · ANALYSIS</span><h3>See the signal behind your score.</h3><p>Break down keywords, structure, role alignment and skill coverage instead of getting one unexplained number.</p><ScorePreview /></SpotlightCard></Reveal>
          <Reveal delay={.08}><SpotlightCard><div className="card-icon"><Target/></div><span className="card-kicker">02 · GAPS</span><h3>Know what is missing.</h3><p>Identify the skills that repeatedly matter for your selected role and separate them from noise.</p><div className="skill-stack"><span>Spring Boot <b>Missing</b></span><span>REST APIs <b>Improve</b></span><span>MySQL <b>Strong</b></span></div></SpotlightCard></Reveal>
          <Reveal delay={.16}><SpotlightCard><div className="card-icon"><WandSparkles/></div><span className="card-kicker">03 · ROADMAP</span><h3>Turn gaps into a plan.</h3><p>A practical sequence of learning, projects and interview preparation based on your current resume.</p><RoadmapPreview /></SpotlightCard></Reveal>
        </div>
      </section>

      <section id="roadmap" className="roadmap-band"><div className="container-wide roadmap-band-inner"><Reveal><div className="section-kicker">YOUR NEXT MOVE</div><h2>From <span>“What should I learn?”</span> to a clear sequence.</h2><p>Start with the evidence you already have. Build the missing pieces. Return with a stronger resume.</p><Link to={uploadPath}><GlowButton>Start with my resume <ArrowRight size={17}/></GlowButton></Link></Reveal><Reveal delay={.12}><RoadmapPreview /></Reveal></div></section>

      <section className="final-cta container-wide"><Reveal><div className="final-card"><div><div className="section-kicker">READY WHEN YOU ARE</div><h2>Give your resume a smarter starting point.</h2><p>Your first analysis starts with one upload.</p></div><Link to={uploadPath}><GlowButton>Upload resume <ArrowRight size={17}/></GlowButton></Link></div></Reveal></section>
    </main>
    <footer className="site-footer"><div>© 2026 ResumePilot</div><div>Resume intelligence · ATS analysis · Career roadmap</div></footer>
  </div>;
}
