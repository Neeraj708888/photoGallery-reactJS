import React from "react";

const PhotoModal = () => {
    const photo = {
        title: "Golden Sunset Over the Ocean",
        description:
            "A breathtaking view of the sun setting over the calm waves — a perfect moment captured in time. The vibrant hues of orange and gold reflect over the water, creating a peaceful and inspiring scene.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        date: "Oct 30, 2025",
    };

    return (
        <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50 mb-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                {/* Left: Title & Description */}
                <div className="max-w-3xl">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
                        {photo.title}
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        {photo.description}
                    </p>
                </div>

                {/* Right: Date */}
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
        </section>
    );
};

export default PhotoModal;
