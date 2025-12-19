import React from "react";
import { motion } from "framer-motion";

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-rose-100 to-pink-50 z-[9999]">
      <motion.div
        className="w-16 h-16 border-4 border-pink-400 border-t-transparent rounded-full animate-spin mb-4 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.p
        className="text-pink-600 text-lg font-semibold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.2, repeatType: "reverse" }}
      >
        Loading your beautiful memories 💖
      </motion.p>
    </div>
  );
};

export default FullPageLoader;
