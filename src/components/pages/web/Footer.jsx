import React from "react";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-3 z-50">
            {/* Full background width */}
            <div className="w-full">
                {/* Inner container aligned with navbar width */}
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 items-center gap-6 text-center sm:text-left">

                    {/* Left - Website Name */}
                    <div>
                        <h2 className="text-lg font-semibold">Photo <span className="text-blue-400">Gallery</span></h2>
                    </div>

                    {/* Center - Social Icons */}
                    <div className="flex justify-center space-x-6">
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-300"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                alt="WhatsApp"
                                className="h-7 w-7"
                            />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-300"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                alt="Instagram"
                                className="h-7 w-7 rounded-full"
                            />
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-300"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                alt="Facebook"
                                className="h-7 w-7"
                            />
                        </a>
                    </div>

                    {/* Right - Copyright */}
                    <div className="flex justify-center sm:justify-end text-sm text-gray-400">
                        <p>© {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
