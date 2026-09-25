import { motion } from "framer-motion";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  top: `${(i * 29) % 100}%`,
  size: 2 + (i % 3),
  duration: 7 + (i % 6),
}));

export default function AnimatedBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient-noise" />
      <div className="ambient-grid" />
      <motion.div
        className="ambient-beam beam-one"
        animate={{ x: ["-15%", "18%", "-15%"], rotate: [-10, -5, -10] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-beam beam-two"
        animate={{ x: ["12%", "-12%", "12%"], rotate: [12, 7, 12] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-glow glow-one"
        animate={{ x: [0, 80, -20, 0], y: [0, 30, -15, 0], scale: [1, 1.12, .94, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-glow glow-two"
        animate={{ x: [0, -70, 30, 0], y: [0, -30, 50, 0], scale: [1, .92, 1.08, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="ambient-particle"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -20, 0], opacity: [.08, .45, .08] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.id * .15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
