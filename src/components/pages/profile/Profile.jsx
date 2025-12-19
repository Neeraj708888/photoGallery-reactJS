import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pencil } from "lucide-react";

const Profile = () => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  );

  const handleEditClick = () => fileInputRef.current.click();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-white py-10 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 overflow-hidden"
      >
        {/* Left - Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center justify-center md:w-1/3 text-center space-y-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
            className="relative"
          >
            <motion.img
              key={profileImage}
              src={profileImage}
              alt="Profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-pink-300 shadow-lg"
            />

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageChange}
            />

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Change Photo"
              onClick={handleEditClick}
              className="absolute bottom-2 right-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 shadow-md"
            >
              <Pencil size={18} />
            </motion.button>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl sm:text-2xl font-semibold text-gray-800"
          >
            Neeraj Sharma
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-sm text-gray-500"
          >
            Wedding Photographer
          </motion.p>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center md:pl-10"
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-2xl font-semibold text-pink-600 mb-6 text-center md:text-left"
          >
            Profile Information
          </motion.h3>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="space-y-5"
          >
            {/* Full Name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Neeraj Sharma"
                className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400 focus:outline-none transition-all"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="neeraj@example.com"
                className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400 focus:outline-none transition-all"
              />
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.7 }}
              className="pt-4 flex justify-center md:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(236,72,153,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-2 rounded-full shadow-md transition-all"
              >
                Update Profile
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
