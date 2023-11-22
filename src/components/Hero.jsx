import React from "react";
import { motion } from "framer-motion";

import ImageCarousel from "./ImageCarousel";

const Hero = () => {
  return (
    <section className="gradient-background p-10 text-white min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="text-center bg-white p-8 rounded-lg shadow-md text-gray-600"
      >
        <h1 className="text-4xl font-bold mb-4">Explore Wellbeing with Hero</h1>
        <p className="text-lg mb-6">
          Your dedicated space for embracing self-improvement.
        </p>
        <button className="bg-gray-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-600">
          Get Started
        </button>
      </motion.div>
      <div className="container mt-4 mx-auto">
        <ImageCarousel />
      </div>
    </section>
  );
};

export default Hero;
