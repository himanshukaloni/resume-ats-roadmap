import { motion } from "framer-motion";

export default function GlowButton({ children, className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: .985 }}
      className={`glow-btn ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
