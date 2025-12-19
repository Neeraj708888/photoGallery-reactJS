import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";

const ViewCollection = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // 🌸 Sample data (replace later with API data)
  const collectionData = {
    id,
    name: "Royal Wedding Collection",
    status: "Active",
    description:
      "A timeless collection capturing royal elegance, emotional moments, and the beauty of love through every frame. Perfect for couples who want their story told in golden tones 💍✨",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    createdAt: "2025-10-25",
    updatedAt: "2025-11-05",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-white flex items-center justify-center py-10 px-4">
      <motion.div
        className="max-w-4xl w-full bg-white/70 backdrop-blur-md border border-pink-200 rounded-3xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between px-6 py-4 bg-pink-50 border-b border-pink-200">
          <h2 className="text-2xl font-bold text-pink-700">
            💐 View Collection Details
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-all"
          >
            <ArrowLeft size={18} /> Back
          </button>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Left: Collection Image */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-md border border-pink-100"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={collectionData.image}
              alt={collectionData.name}
              className="w-full h-80 object-cover"
            />
          </motion.div>

          {/* Right: Info Details */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-sm uppercase text-gray-500">Collection Name</h3>
              <p className="text-xl font-semibold text-gray-800">
                {collectionData.name}
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase text-gray-500">Description</h3>
              <p className="text-pink-700 italic">{collectionData.description}</p>
            </div>

            <div>
              <h3 className="text-sm uppercase text-gray-500">Status</h3>
              <p className="flex items-center gap-2 font-semibold">
                {collectionData.status.toLowerCase() === "active" ? (
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
                <h3 className="text-sm uppercase text-gray-500">Created At</h3>
                <p className="font-semibold text-gray-700">
                  {collectionData.createdAt}
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase text-gray-500">Updated At</h3>
                <p className="font-semibold text-gray-700">
                  {collectionData.updatedAt}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="px-6 py-4 bg-pink-50 border-t border-pink-200 text-center">
          <p className="text-pink-700 text-sm font-medium">
            💞 Every Memory Tells a Love Story 💞
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewCollection;
