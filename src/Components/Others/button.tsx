import { motion } from "framer-motion";
import React from "react";

const ShinyButton = () => {
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
      className="px-12 py-3 rounded-md relative radial-gradient"
    >
      <span className="text-neutral-100 tracking-wide font-medium text-xl h-full w-full block relative linear-mask">
        Send
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

export default ShinyButton;