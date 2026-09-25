import { motion } from 'framer-motion';
export default function MetricCard({ icon: Icon, label, value, detail, index = 0 }) {
  return <motion.div className="metric-card" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:index*.08,duration:.55}} whileHover={{y:-5}}>
    <div className="metric-icon">{Icon && <Icon size={18}/>}</div>
    <div className="metric-copy"><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>
    <div className="metric-sheen" />
  </motion.div>
}
