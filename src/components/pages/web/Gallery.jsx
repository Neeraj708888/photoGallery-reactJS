import React from "react";
import { useNavigate } from "react-router-dom";

const galleryData = [
    {
        id: 1,
        title: "Sunset Over the Hills",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
        date: "Oct 12, 2025",
    },
    {
        id: 2,
        title: "Mountain Adventure",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
        date: "Sep 28, 2025",
    },
    {
        id: 3,
        title: "City Lights at Night",
        img: "https://images.unsplash.com/photo-1517816428104-797678c7cf0d?auto=format&fit=crop&w=1000&q=80",
        date: "Aug 19, 2025",
    },
    {
        id: 4,
        title: "Ocean Waves",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
        date: "Jul 8, 2025",
    },
    {
        id: 5,
        title: "Desert Mirage",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
        date: "Jun 21, 2025",
    },
    {
        id: 6,
        title: "Forest Walk",
        img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1000&q=80",
        date: "May 14, 2025",
    },
];

const Gallery = () => {

    const navigate = useNavigate();
    return (
        <section className="py-16 bg-gray-50">
            {/* Section Title */}
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    Our <span className="text-blue-500">Gallery</span>
                </h2>
                <p className="text-gray-600 mt-2 text-base sm:text-lg">
                    Explore our beautiful collection of memorable photos.
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryData.map((photo) => (
                    <div
                        key={photo.id}
                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                        onClick={() => navigate('/collection')}
                    >
                        {/* Image */}
                        <div className="relative w-full h-60 sm:h-72 overflow-hidden">
                            <img
                                src={photo.img}
                                alt={photo.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Text Info */}
                        <div className="p-4 flex flex-col justify-between">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                                {photo.title}
                            </h3>
                            <p className="text-gray-500 text-sm">{photo.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
