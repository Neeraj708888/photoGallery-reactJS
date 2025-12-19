import React from "react";
import { Link, useNavigate } from "react-router-dom";

const cardData = [
    {
        id: 1,
        title: "Nature Collection",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        photos: 32,
    },
    {
        id: 2,
        title: "City Vibes",
        img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80",
        photos: 45,
    },
    {
        id: 3,
        title: "Adventure Trails",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        photos: 21,
    },
    {
        id: 4,
        title: "Ocean Bliss",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        photos: 18,
    },
];

const Collection = () => {

    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/photos/${id}`);
    };

    return (
        <section className="py-16 bg-gray-50">
            {/* Section Title */}
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    Featured <span className="text-blue-500">Collections</span>
                </h2>
                <p className="text-gray-600 mt-2 text-base sm:text-lg">
                    Explore our curated photo collections from around the world.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className="group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col justify-between"

                    >
                        {/* Title */}
                        <div className="p-4 flex items-center justify-between">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                {card.title}
                            </h3>
                        </div>

                        {/* Image */}
                        <div className="relative w-full h-56 sm:h-64 overflow-hidden" onClick={() => handleNavigate(card.id)}>

                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />



                            {/* Photo Count */}
                            <button type='button' className="absolute bottom-3 right-3 bg-black/70 text-white text-sm font-medium px-3 py-1 rounded-full" onClick={(e) => {
                                e.stopPropagation();
                                handleNavigate(card.id)
                            }}>
                                {card.photos} Photos
                            </button>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Collection;