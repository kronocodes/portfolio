import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "../../ThemeContext";

const ShinyButton = () => {
  const { isLight } = useTheme();

  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-12 py-3 rounded-md relative radial-gradient flex items-center justify-center"
      style={{ background: isLight ? 'white' : 'black', border: isLight ? '1px solid #e4e4e7' : 'none' }}
    >
      <span className={`tracking-wide font-medium text-xl h-full w-full block relative linear-mask ${isLight ? "text-neutral-800" : "text-neutral-100"}`}>
        Send
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

export default ShinyButton;
