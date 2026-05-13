import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      style={{ width: "100%", display: "block" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}