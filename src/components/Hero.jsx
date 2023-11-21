// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <h1>Your Hero Website</h1>
      {<h1 className="text-3xl font-bold underline">Hello world!</h1>}
    </motion.div>
  );
};

export default Hero;
