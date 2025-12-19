import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateGallery() {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    collection: "",
    gallery: "",
    quotes: "",
    date: "",
    time: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [focusedField, setFocusedField] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // 🌸 Static dropdown data
  const collectionOptions = [
    "Nature Collection",
    "Wedding Memories",
    "Travel Diaries",
    "Festival Shots",
  ];
  const galleryOptions = [
    "Beach Vibes",
    "Haldi Ceremony",
    "City Nights",
    "Mountain Views",
  ];

  // 📦 Prefill existing photo data (Simulated)
  useEffect(() => {
    const existingData = {
      collection: "Wedding Memories",
      gallery: "Haldi Ceremony",
      quotes: "Golden moments of love and laughter 💛",
      date: "2025-11-06",
      time: "12:45",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
    };
    setForm(existingData);
    setImagePreview(existingData.image);
  }, []);

  // ✏️ Input handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg("");

    setTimeout(() => {
      setSubmitting(false);
      setSuccessMsg(`Photo details updated successfully!`);
    }, 1000);
  };

  const inputWrapperClass = (field) =>
    `transition-shadow duration-200 rounded-lg p-1 ${
      focusedField === field ? "shadow-lg ring-2 ring-pink-300" : "shadow-sm"
    }`;

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-red-500 text-white rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Create Gallery Details
            </h2>
            <p className="text-pink-100/90 mt-1">
              Update collection info or replace the photo easily.
            </p>
          </div>
          <div className="text-sm bg-white/10 px-3 py-1 rounded-full">Creating</div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-6 bg-white rounded-2xl p-6 shadow-lg border"
      >
        {/* Select Collection */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium mb-1 block">
            Select Collection
          </span>
          <div className={inputWrapperClass("collection")}>
            <select
              name="collection"
              value={form.collection}
              onChange={handleChange}
              onFocus={() => handleFocus("collection")}
              onBlur={handleBlur}
              className="w-full bg-transparent px-4 py-3 rounded-lg text-gray-800 focus:outline-none appearance-none"
            >
              <option value="">-- Select a Collection --</option>
              {collectionOptions.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </label>

        {/* Select Gallery */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium mb-1 block">
            Select Gallery
          </span>
          <div className={inputWrapperClass("gallery")}>
            <select
              name="gallery"
              value={form.gallery}
              onChange={handleChange}
              onFocus={() => handleFocus("gallery")}
              onBlur={handleBlur}
              className="w-full bg-transparent px-4 py-3 rounded-lg text-gray-800 focus:outline-none appearance-none"
            >
              <option value="">-- Select a Gallery --</option>
              {galleryOptions.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </label>

        {/* Quotes */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium mb-1 block">Quotes</span>
          <div className={inputWrapperClass("quotes")}>
            <textarea
              name="quotes"
              value={form.quotes}
              onChange={handleChange}
              onFocus={() => handleFocus("quotes")}
              onBlur={handleBlur}
              placeholder="Write your thoughts about this moment..."
              rows={3}
              className="w-full bg-transparent px-4 py-3 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none resize-none"
            />
          </div>
        </label>

        {/* Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Date</span>
            <div className={inputWrapperClass("date")}>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                onFocus={() => handleFocus("date")}
                onBlur={handleBlur}
                className="w-full bg-transparent px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Time</span>
            <div className={inputWrapperClass("time")}>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                onFocus={() => handleFocus("time")}
                onBlur={handleBlur}
                className="w-full bg-transparent px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              />
            </div>
          </label>
        </div>

        {/* Upload Image */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium mb-1 block">
            Change / Upload Photo
          </span>
          <div className={inputWrapperClass("image")}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              onFocus={() => handleFocus("image")}
              onBlur={handleBlur}
              className="w-full px-4 py-2 rounded-lg text-gray-700 bg-transparent focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
            />
          </div>

          {imagePreview && (
            <div className="mt-4 flex justify-center">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-48 h-36 object-cover rounded-lg border shadow-md"
              />
            </div>
          )}
        </label>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <button
            type="submit"
            disabled={submitting}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-md font-semibold transition-all duration-200 ${
              submitting
                ? "bg-pink-300 text-white cursor-wait"
                : "bg-pink-600 hover:bg-pink-700 text-white"
            }`}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>

           <button
            type="button"
            className='inline-flex items-center gap-2 px-5 py-2 rounded-md font-semibold transition-all duration-200  bg-pink-600 hover:bg-pink-700 text-white' onClick={() => navigate('/admin/gallery')}>
           Back
          </button>

          {successMsg && (
            <p className="text-sm text-green-600 text-center sm:text-right">
              {successMsg}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
