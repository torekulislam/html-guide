import { useLocation } from "react-router-dom";
import { motion as Motion } from "framer-motion";
export default function Card({ children, className = "", animate = true }) {
  const location = useLocation(); // SPA route change
  return animate ? (
    <Motion.div
      key={location.pathname} // remount on route change
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "anticipate" }}
      className={`rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-xl ${className}`}
    >
      {children}
    </Motion.div>
  ) : (
    <div className={`rounded-3xl p-8 shadow-xl ${className}`}>{children}</div>
  );
}
