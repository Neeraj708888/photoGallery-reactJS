import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";

const ViewGallery = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // 🩷 Static sample data — replace later with API
  const galleryData = {
    id: id,
    thumbnail:
      "https://images.unsplash.com/photo-1529634892647-3b4b96c45dfd?auto=format&fit=crop&w=900&q=80",
    name: "Wedding Golden Moments",
    status: "active",
    description:
      "Capturing the most precious moments of a couple’s special day — where love, laughter, and forever begin 💞",
    createdAt: "2025-11-01",
    updatedAt: "2025-11-06",
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
          <h2 className="text-2xl font-bold text-pink-700">💒 View Gallery Details</h2>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-all"
          >
            <ArrowLeft size={18} /> Back
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid md:grid-cols-2 gap-6 items-start">
          {/* Thumbnail */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-md border border-pink-100"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={galleryData.thumbnail}
              alt={galleryData.name}
              className="w-full h-80 object-cover"
            />
          </motion.div>

          {/* Info Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm text-gray-500 uppercase">Gallery Name</h3>
              <p className="text-lg font-semibold text-gray-800">{galleryData.name}</p>
            </div>

            <div>
              <h3 className="text-sm text-gray-500 uppercase">Description</h3>
              <p className="text-pink-700 italic">{galleryData.description}</p>
            </div>

            <div>
              <h3 className="text-sm text-gray-500 uppercase">Status</h3>
              <p className="flex items-center gap-2 font-semibold">
                {galleryData.status === "active" ? (
                  <span className="text-green-600 flex items-center gap-1">
                    <CheckCircle size={18} /> Active
                  </span>
                ) : (
                  <span className="text-red-600 flex items-center gap-1">
                    <XCircle size={18} /> Inactive
                  </span>
                )}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm text-gray-500 uppercase">Created At</h3>
                <p className="font-semibold text-gray-700">{galleryData.createdAt}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 uppercase">Last Updated</h3>
                <p className="font-semibold text-gray-700">{galleryData.updatedAt}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-pink-200 bg-pink-50 text-center">
          <p className="text-sm text-pink-700 font-medium">
            💞 A Collection of Everlasting Memories 💞
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewGallery;
