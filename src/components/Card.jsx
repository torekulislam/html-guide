import React from "react";
import { motion } from "framer-motion";

export default function Card({ children, className = "", animate = true }) {
  return animate ? (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }} // animate once when 50% of card is in view
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`rounded-3xl shadow-xl  ${className}`}
    >
      {children}
    </motion.div>
  ) : (
    <div className={`rounded-3xl p-8 shadow-xl  ${className}`}>{children}</div>
  );
}
