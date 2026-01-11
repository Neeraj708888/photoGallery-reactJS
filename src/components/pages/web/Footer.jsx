import React, { useEffect, useState } from "react";

const Footer = () => {
    const [showFooter, setShowFooter] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // scrolling down
                setShowFooter(false);
            } else {
                // scrolling up
                setShowFooter(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <footer
            className={`fixed bottom-0 left-0 w-full bg-gray-900 text-white py-1 z-50
      transition-transform duration-300
      ${showFooter ? "translate-y-0" : "translate-y-full"}`}
        >
            <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 sm:grid-cols-3 items-center gap-2 text-center sm:text-left">

                {/* Left */}
                <h2 className="text-xs sm:text-sm font-semibold">
                    Photo <span className="text-blue-400">Gallery</span>
                </h2>

                {/* Center */}
                <div className="flex justify-center space-x-4">
                    <a href="https://wa.me/919654413626" target="_blank">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                            alt="WhatsApp"
                        />
                    </a>

                    <a href="https://www.instagram.com/maithil_brahmin" target="_blank">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                            className="h-4 w-4 sm:h-5 sm:w-5 rounded-full"
                            alt="Instagram"
                        />
                    </a>

                    <a href="https://www.facebook.com/share/1C7jjtFyxk/" target="_blank">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                            alt="Facebook"
                        />
                    </a>
                </div>

                {/* Right */}
                <p className="text-[10px] sm:text-xs text-gray-400 text-center sm:text-right">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
