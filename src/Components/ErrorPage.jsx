import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <title>Error-404</title>

            <Navbar />


            <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <FaExclamationTriangle className="text-6xl text-red-500 mb-6 animate-pulse" />
                <h1 className="text-5xl font-bold text-gray-800 mb-3">Oops! Page Not Found</h1>
                <p className="text-gray-500 text-lg mb-8">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>
                <Link
                    to="/home"
                    className="btn flex items-center mt-3 gap-2 bg-gradient-to-r from-[#E59560] to-[#F28C4C] text-white 
                                       font-medium shadow-md hover:from-[#F28C4C] hover:to-[#D77A3D] 
                                       transition-all duration-300 transform hover:scale-105"
                >
                    Go Back Home
                </Link>
            </main>


            <Footer />
        </div>
    );
};

export default ErrorPage;
