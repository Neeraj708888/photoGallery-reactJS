import React from "react";
import { motion } from "framer-motion";

const TableSpinner = () => {
  return (
    <tr>
      <td colSpan="100%">
        <div className="flex flex-col items-center justify-center py-10 bg-pink-50/50 rounded-xl">
          <motion.div
            className="w-10 h-10 border-4 border-pink-400 border-t-transparent rounded-full animate-spin mb-3"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          ></motion.div>
          <motion.span
            className="text-pink-600 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1.2, repeatType: "reverse" }}
          >
            Loading table data...
          </motion.span>
        </div>
      </td>
    </tr>
  );
};

export default TableSpinner;
