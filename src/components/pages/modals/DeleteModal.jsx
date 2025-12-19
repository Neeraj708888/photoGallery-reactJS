import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, X } from "lucide-react";

const DeleteModal = ({
  isOpen,
  onConfirm,
  onCancel,
  title = "Delete Confirmation",
  message = "Are you sure you want to delete this item?",
}) => {
  const modalRef = useRef(null);

  // 🧩 Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // 🧩 Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onCancel();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onCancel]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[99999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className="bg-white/95 backdrop-blur-md border border-pink-200 rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4 text-center relative"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* ❌ Close Button */}
            <button
              onClick={onCancel}
              className="absolute top-4 right-4 text-gray-500 hover:text-pink-600 transition-all"
            >
              <X size={20} />
            </button>

            {/* 🗑️ Icon + Text */}
            <div className="flex flex-col items-center">
              <Trash2 className="text-pink-600 mb-3 drop-shadow-md" size={48} />
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {title}
              </h2>
              <p className="text-gray-600 mb-6 px-2">{message}</p>

              {/* ✅ Buttons */}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={onConfirm}
                  className="bg-pink-600 text-white px-5 py-2.5 rounded-lg hover:bg-pink-700 transition-all shadow-md hover:shadow-lg"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={onCancel}
                  className="border border-gray-300 px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeleteModal;
