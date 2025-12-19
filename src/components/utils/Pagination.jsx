import React from "react";
import { motion } from "framer-motion";

const Pagination = ({ currentPage, totalItems, limit, onPageChange = () => {} }) => {
  const totalPages = Math.ceil(totalItems / limit);
  if (totalPages <= 1) return null;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
      {/* Results Info */}
      <p className="mb-3 sm:mb-0">
        Showing{" "}
        <span className="font-semibold text-pink-600">
          {(currentPage - 1) * limit + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-pink-600">
          {Math.min(currentPage * limit, totalItems)}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-pink-600">{totalItems}</span> results
      </p>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-2">
        {/* Previous */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1.5 rounded-full border transition-all duration-300 ${
            currentPage === 1
              ? "border-gray-200 text-gray-400 cursor-not-allowed"
              : "border-pink-300 text-pink-600 hover:bg-pink-100 hover:shadow-md"
          }`}
        >
          ‹
        </motion.button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <motion.button
            key={i + 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1.5 rounded-full border font-medium transition-all duration-300 ${
              currentPage === i + 1
                ? "bg-pink-500 text-white border-pink-600 shadow-lg scale-105"
                : "border-pink-200 text-pink-600 hover:bg-pink-100 hover:shadow-md"
            }`}
          >
            {i + 1}
          </motion.button>
        ))}

        {/* Next */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1.5 rounded-full border transition-all duration-300 ${
            currentPage === totalPages
              ? "border-gray-200 text-gray-400 cursor-not-allowed"
              : "border-pink-300 text-pink-600 hover:bg-pink-100 hover:shadow-md"
          }`}
        >
          ›
        </motion.button>
      </div>
    </div>
  );
};

export default Pagination;
