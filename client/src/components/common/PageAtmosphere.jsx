import { motion } from 'framer-motion';

export default function PageAtmosphere({ density = 'normal' }) {
  const dots = density === 'high' ? 24 : 14;
  return (
    <div className="page-atmosphere" aria-hidden="true">
      <div className="atmosphere-noise" />
      <motion.div className="light-beam beam-one" animate={{ x: [0, 120, -40, 0], opacity: [.16,.26,.12,.16] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="light-beam beam-two" animate={{ x: [0, -90, 50, 0], opacity: [.08,.18,.1,.08] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="grid-fade" />
      {Array.from({ length: dots }).map((_, i) => (
        <motion.i key={i} className="float-dot" style={{ left: `${(i * 37) % 100}%`, top: `${(i * 61) % 100}%` }} animate={{ y: [0, -18, 0], opacity: [.12,.42,.12] }} transition={{ duration: 4 + (i % 5), delay: i * .13, repeat: Infinity, ease: 'easeInOut' }} />
      ))}
    </div>
  );
}
