import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import PhotoModal from "../modals/PhotosModal";

const Photos = () => {
    const { id } = useParams();

    const [openPhotoModal, setOpenPhotoModal] = useState(null);

    // Dummy data (replace with API data later)
    const photos = [
        {
            id: 1,
            title: "Sunset in the Hills",
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            title: "Calm Lake",
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            title: "Mountain Mist",
            img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 5,
            title: "Forest Walk",
            img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 6,
            title: "Desert Dunes",
            img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 7,
            title: "Ocean Waves",
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 8,
            title: "Autumn Pathway",
            img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 9,
            title: "Snowy Peaks",
            img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 10,
            title: "Green Valley",
            img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 11,
            title: "Night Lights",
            img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 12,
            title: "Lavender Fields",
            img: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 13,
            title: "Misty Forest",
            img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 14,
            title: "Sunrise Over the Ocean",
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 15,
            title: "Rocky Coastline",
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 16,
            title: "Countryside Road",
            img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 17,
            title: "Blue Horizon",
            img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 18,
            title: "Bridge Over River",
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 19,
            title: "Starry Night Sky",
            img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 20,
            title: "Tropical Paradise",
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        },
    ];


    return (
        <section className="min-h-screen bg-gray-50 py-10 px-6 md:px-12 mt-16 mb-12">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-8 flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                        Collection #{id} - Photo Gallery
                    </h2>
                    <p className="text-gray-500 mt-1">Explore all photos in this collection.</p>
                </div>
                <Link
                    to="/collection"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                >
                    ← Back to Collections
                </Link>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300"
                        onClick={() => setOpenPhotoModal(photo)}

                    >
                        {/* Image */}
                        <img
                            src={photo.img}
                            alt={photo.title}
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                            <div className="p-4 text-center text-white">
                                <h3 className="text-lg font-semibold">{photo.title}</h3>
                                <p className="text-sm text-gray-200">View Details</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Photo Modal */}
            <PhotoModal photo={openPhotoModal} onClose={() => setOpenPhotoModal(null)} />
        </section>
    );
};

export default Photos;
