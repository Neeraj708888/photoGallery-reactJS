import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye, Edit, Trash2, ImagePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PhotosList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("All");
  const [selectedGallery, setSelectedGallery] = useState("All");

  // 🌸 Static Data
  const photos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=600&q=80",
      collection: "Haridwar",
      gallery: "Wedding Rituals",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
      collection: "Bhaiya Dooj",
      gallery: "Family Moments",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
      collection: "Engagement",
      gallery: "Couple Portraits",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80",
      collection: "Haldi",
      gallery: "Fun & Colors",
    },
  ];

  // 🌼 Filtered Results
  const filteredPhotos = photos.filter(
    (photo) =>
      (selectedCollection === "All" || photo.collection === selectedCollection) &&
      (selectedGallery === "All" || photo.gallery === selectedGallery) &&
      (photo.collection.toLowerCase().includes(search.toLowerCase()) ||
        photo.gallery.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white py-10 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-pink-600 flex items-center gap-2">
            <ImagePlus className="w-7 h-7" /> Photos Management
          </h1>

          {/* Create Button on the Right */}
          <button
            className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition duration-200 shadow-md self-end md:self-auto"
            onClick={() => navigate("/admin/photos/create")}
          >
            + Create
          </button>
        </div>

        {/* Search & Filters Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          {/* Filters Group */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="px-4 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none w-full sm:w-48"
            >
              <option>All</option>
              <option>Haridwar</option>
              <option>Bhaiya Dooj</option>
              <option>Engagement</option>
              <option>Haldi</option>
            </select>

            <select
              value={selectedGallery}
              onChange={(e) => setSelectedGallery(e.target.value)}
              className="px-4 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none w-full sm:w-48"
            >
              <option>All</option>
              <option>Wedding Rituals</option>
              <option>Family Moments</option>
              <option>Couple Portraits</option>
              <option>Fun & Colors</option>
            </select>
          </div>

          {/* Search Bar on Right */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search photos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all"
            />
          </div>
        </div>

        {/* 🌸 Table Section */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border border-pink-100 bg-white">
          <table className="min-w-full border-collapse">
            <thead className="bg-pink-100 text-pink-700">
              <tr>
                <th className="p-3 text-left">SL</th>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Collection Name</th>
                <th className="p-3 text-left">Gallery Name</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPhotos.length > 0 ? (
                filteredPhotos.map((photo, index) => (
                  <motion.tr
                    key={photo.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-b hover:bg-pink-50 transition"
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">
                      <img
                        src={photo.url}
                        alt={photo.collection}
                        className="w-20 h-16 object-cover rounded-md shadow-sm"
                      />
                    </td>
                    <td className="p-3 font-medium text-gray-700">{photo.collection}</td>
                    <td className="p-3 text-gray-500">{photo.gallery}</td>
                    <td className="p-3 flex justify-center gap-3 text-pink-600">
                      <button
                        title="View"
                        className="hover:text-pink-700 transition" onClick={() => navigate('/admin/photos/view')}
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        title="Edit"
                        className="hover:text-pink-700 transition"  onClick={() => navigate("/admin/photos/edit")}
                        
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        title="Delete"
                        className="hover:text-red-500 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-500 italic">
                    No photos found ✨
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default PhotosList;
