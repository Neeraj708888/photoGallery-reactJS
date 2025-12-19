import React from "react";
import { AlertTriangle } from "lucide-react"; // modern icon from lucide-react

const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-8 relative transform transition-all scale-100 hover:scale-[1.01]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Logo / Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-red-100 p-4 rounded-full">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          {title}
        </h2>

        {/* Message */}
        <p className="text-gray-600 text-center text-sm mb-6 px-4 leading-relaxed">
          {message}
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-5 py-2.5 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 transition font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2.5 text-sm rounded-lg bg-red-600 hover:bg-red-700 text-white transition font-medium shadow-md"
          >
            Confirm
          </button>
        </div>

        {/* Small decorative line at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 rounded-b-2xl"></div>
      </div>
    </div>
  );
};

export default ConfirmModal;
