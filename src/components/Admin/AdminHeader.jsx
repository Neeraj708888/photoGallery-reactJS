import React from "react";
import { Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminNavbar = ({ isOpen, toggleSidebar }) => {

    const navigate = useNavigate();
    return (
        <header
            className={`fixed top-0 right-0 z-1000 text-black opacity-60 flex items-center justify-between  transition-all duration-300 px-8 bg-amber-100 py-4`}
            style={{
                left: isOpen ? "16rem" : "4rem",
                width: isOpen ? "calc(100% - 16rem)" : "calc(100% - 4rem)",
            }}
        >
            {/* <button
                onClick={toggleSidebar}
                className="md:hidden p-4 focus:outline-none hover:bg-blue-700 rounded"
            >
                ☰
            </button> */}


            <h1 className="font-bold text-lg">Photo <span className="text-blue-600">Gallery</span></h1>

            <div className="flex gap-4 justify-center items-center text-sm opacity-90">

                <button className="flex justify-center items-center cursor-pointer" title="Notification">
                    <Bell size={22} />
                </button>

                <button className="flex justify-center items-center cursor-pointer" title="Profile">
                    <User size={22} onClick={() => navigate('/admin/profile')} />
                </button>

            </div>
        </header>
    );
};

export default AdminNavbar;
