import React, { useContext, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router';

const MyProfilePage = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);



    const { user } = useContext(AuthContext);
    console.log(user)





    return (
        <div className="min-h-screen flex flex-col bg-[#fdf6ec]">
            <title>WarmPaws - Profile</title>
            <Navbar />

            <div data-aos="zoom-out" className="flex-grow flex items-center justify-center py-10 px-4 sm:px-6 lg:px-20">
                <div className="bg-[#FFF7ED] shadow-2xl rounded-xl w-full max-w-4xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">

                    <div className="flex-shrink-0">
                        <img
                            src={user.photoURL || 'https://i.ibb.co.com/RGCchFdt/user-Images.png'}
                            alt="Profile"
                            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-[#E59560]"
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-4">
                        <h1 className="text-2xl md:text-3xl font-bold text-[#1E293B]">
                            {user.displayName || "No Name"}
                        </h1>
                        <h2 className="text-lg md:text-xl text-[#2E3A2E]">
                            {user.email || "No Email"}
                        </h2>

                        <Link to="/update-profile">
                            <button className="px-6 py-2 mt-4 text-sm md:text-base font-medium rounded-full 
                                           bg-gradient-to-r from-[#E59560] to-[#d97e48] text-white 
                                           shadow-md hover:from-[#d97e48] hover:to-[#c76e3d] 
                                           transition-all duration-300 transform hover:scale-105">
                                Update Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MyProfilePage;
