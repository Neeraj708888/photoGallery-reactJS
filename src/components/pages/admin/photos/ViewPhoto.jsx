import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const ViewPhoto = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // 🩷 Static sample data (you can later replace with API or state)
  const photoData = {
    id: id,
    image:
      "https://images.unsplash.com/photo-1604409364561-3c6cc1637e41?auto=format&fit=crop&w=900&q=80",
    collectionName: "Haridwar Memories",
    galleryName: "Wedding Day",
    quotes: "Two hearts, one soul, endless memories 💞",
    date: "2025-11-02",
    time: "06:30 PM",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-100 to-white flex items-center justify-center py-10 px-4">
      <motion.div
        className="max-w-4xl w-full bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-pink-200 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-pink-200 bg-pink-50">
          <h2 className="text-2xl font-bold text-pink-700">
            📸 View Photo Details
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-all"
          >
            <ArrowLeft size={18} /> Back
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6 grid md:grid-cols-2 gap-6 items-start">
          {/* 🖼️ Image Preview */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-md border border-pink-100"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={photoData.image}
              alt={photoData.collectionName}
              className="w-full h-80 object-cover"
            />
          </motion.div>

          {/* 📋 Photo Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm text-gray-500 uppercase">Collection</h3>
              <p className="text-lg font-semibold text-gray-800">
                {photoData.collectionName}
              </p>
            </div>

            <div>
              <h3 className="text-sm text-gray-500 uppercase">Gallery</h3>
              <p className="text-lg font-semibold text-gray-800">
                {photoData.galleryName}
              </p>
            </div>

            <div>
              <h3 className="text-sm text-gray-500 uppercase">Quote</h3>
              <p className="text-pink-600 italic text-base">
                “{photoData.quotes}”
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm text-gray-500 uppercase">Date</h3>
                <p className="font-semibold text-gray-700">{photoData.date}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 uppercase">Time</h3>
                <p className="font-semibold text-gray-700">{photoData.time}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-pink-200 bg-pink-50 text-center">
          <p className="text-sm text-pink-700 font-medium">
            💞 Cherishing Every Memory Together 💞
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewPhoto;
