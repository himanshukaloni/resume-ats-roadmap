import { motion } from 'framer-motion';
export default function ScoreRing({score=0,label='ATS'}){
 const r=48,c=2*Math.PI*r,offset=c-(score/100)*c;
 return <div className="score-ring-large"><svg viewBox="0 0 120 120"><circle className="ring-track" cx="60" cy="60" r={r}/><motion.circle className="ring-progress" cx="60" cy="60" r={r} strokeDasharray={c} initial={{strokeDashoffset:c}} animate={{strokeDashoffset:offset}} transition={{duration:1.2,ease:'easeOut'}}/></svg><div className="ring-center"><b>{score}</b><span>{label}</span></div></div>
}
