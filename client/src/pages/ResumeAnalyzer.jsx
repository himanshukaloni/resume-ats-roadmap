import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, FileText, LoaderCircle, ScanLine, Sparkles, UploadCloud } from 'lucide-react';
import { resumeService } from '../services/resumeService';
import PageAtmosphere from '../components/common/PageAtmosphere';
import GlassCard from '../components/ui/GlassCard';
import GlowButton from '../components/ui/GlowButton';
import Reveal from '../components/common/Reveal';

export default function ResumeAnalyzer(){
 const [file,setFile]=useState(null),[role,setRole]=useState('Java Backend Developer'),[loading,setLoading]=useState(false),[err,setErr]=useState('');
 const nav=useNavigate();
 const {getRootProps,getInputProps,isDragActive}=useDropzone({accept:{'application/pdf':['.pdf'],'application/vnd.openxmlformats-officedocument.wordprocessingml.document':['.docx']},maxFiles:1,onDrop:f=>setFile(f[0])});
 const submit=async()=>{if(!file){setErr('Choose a PDF or DOCX resume first.');return}setLoading(true);setErr('');try{const r=await resumeService.analyze(file,role);nav(`/roadmap/${r.data.analysis._id}`)}catch(e){setErr(e.response?.data?.message||'Analysis failed. Please try again.')}finally{setLoading(false)}};
 return <div className="app-page analyzer-page"><PageAtmosphere density="high"/><div className="content-shell narrow-shell">
   <Reveal><div className="analyzer-intro"><div><div className="eyebrow">RESUME INTELLIGENCE / 01</div><h1>Let your resume<br/><em>speak for itself.</em></h1><p>Upload once. We inspect the structure, skills, keywords and role alignment — then turn the gaps into a practical roadmap.</p></div><div className="scan-orbit"><motion.div animate={{rotate:360}} transition={{duration:14,repeat:Infinity,ease:'linear'}} className="orbit-ring"/><ScanLine size={32}/></div></div></Reveal>
   <Reveal><GlassCard className="analyzer-card"><div {...getRootProps({className:`dropzone-advanced ${isDragActive?'is-dragging':''}`})}><input {...getInputProps()}/>{file?<><div className="file-icon"><FileText/></div><div><h3>{file.name}</h3><p>Ready to scan · {(file.size/1024/1024).toFixed(2)} MB</p></div><div className="check-badge"><Check size={16}/></div></>:<><div className="upload-icon"><UploadCloud/></div><h3>{isDragActive?'Release to upload':'Drop your resume here'}</h3><p>PDF or DOCX · maximum 5 MB</p><span className="drop-action">Browse files <ArrowRight size={14}/></span></>}</div>
    <div className="analyzer-controls"><label><span>Target role</span><input value={role} onChange={e=>setRole(e.target.value)} placeholder="e.g. Java Backend Developer"/></label><GlowButton onClick={submit} disabled={loading}>{loading?<><LoaderCircle className="spin" size={17}/> Scanning...</>:<>Analyze resume <ArrowRight size={17}/></>}</GlowButton></div>
    {err&&<div className="error">{err}</div>}
   </GlassCard></Reveal>
   <div className="scan-features"><Reveal><div><Sparkles size={18}/><b>Explainable score</b><span>Understand what moves your ATS score.</span></div></Reveal><Reveal><div><ScanLine size={18}/><b>Role-aware matching</b><span>Compare your skills against the selected role.</span></div></Reveal><Reveal><div><ArrowRight size={18}/><b>Actionable roadmap</b><span>Turn gaps into weekly learning targets.</span></div></Reveal></div>
 </div></div>
}
