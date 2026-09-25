import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const sx = useSpring(x, { stiffness: 150, damping: 20 });
  const sy = useSpring(y, { stiffness: 150, damping: 20 });

  const move = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(((event.clientX - rect.left) / rect.width) * 100);
    y.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <motion.div
      ref={ref}
      className={`spotlight-card ${className}`}
      onMouseMove={move}
      style={{ "--mx": sx, "--my": sy }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}
