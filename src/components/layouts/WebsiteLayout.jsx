import React from 'react'
import Navbar from '../pages/web/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/web/Footer'

const WebsiteLayout = () => {
    return (
        <>
            <Navbar />
            <main className='min-h-screen'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default WebsiteLayout;
