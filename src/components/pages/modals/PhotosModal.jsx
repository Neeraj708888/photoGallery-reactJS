import { X } from "lucide-react";
import React from "react";

const PhotoModal = ({ photo, onClose }) => {
    if (!photo) return null;  

    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-xl max-w-3xl w-[90%] overflow-hidden relative animate-fadeIn"
                onClick={(e) => e.stopPropagation()} 
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 hover:text-black text-2xl p-3 rounded-full bg-gradient-to-tr from-red-500 via-pink-500 to-orange-400 text-white hover:scale-110 transition-transform shadow-md"
                >
                    <X className="w-5 h-5 font-bold" strokeWidth={4} /> 
                </button>

                {/* Header Section */}
                <div className="p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                        <div className="max-w-2xl">
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                                {photo.title}
                            </h1>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                {photo.description}
                            </p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:ml-6">
                            <p className="text-gray-500 text-sm sm:text-base font-medium">
                                {photo.date}
                            </p>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={photo.img}
                            alt={photo.title}
                            className="w-full h-[60vh] object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoModal;
