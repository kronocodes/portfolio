import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          className="page-loader-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <div className="page-loader-inner">
            <div className="loader-dots">
              <span className="loader-dot" style={{ animationDelay: "0s" }} />
              <span className="loader-dot" style={{ animationDelay: "0.267s" }} />
              <span className="loader-dot" style={{ animationDelay: "0.534s" }} />
            </div>
            <span className="loader-label">loading</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
