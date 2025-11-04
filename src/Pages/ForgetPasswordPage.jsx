import React, { useContext, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import petBg from '../assets/petBg.jpg';
import { AuthContext } from '../Provider/AuthContext';
import { Link } from 'react-router';
import { FaBackward } from 'react-icons/fa';

const ForgetPasswordPage = () => {
    const { getEmailRef, customHandleForgetPassword } = useContext(AuthContext);
    const loginInputEmail = getEmailRef;


    const currentEmailRef = useRef();

    const handleResetPassword = () => {
        const email = currentEmailRef.current.value;
        customHandleForgetPassword(email);
    };


    return (
        <div className="flex flex-col min-h-screen">
            <title>WarmPaws - Forgot Password</title>
            {/* Navbar */}
            <Navbar />

            {/* Main Section */}
            <div
                className="flex-grow flex items-center justify-center bg-base-200 px-4 sm:px-6 md:px-10 py-8"
                style={{
                    backgroundImage: `url(${petBg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}
            >
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl rounded-2xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold py-1 text-center">
                            Forgot Password
                        </h2>

                        <fieldset className="fieldset">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full font-semibold"
                                placeholder="Enter your email"
                                required
                                defaultValue={loginInputEmail !== "" ? loginInputEmail : ""}
                                ref={currentEmailRef}
                            />
                            <div className='flex flex-col justify-between'>
                                <button onClick={handleResetPassword} className="btn flex items-center mt-3 gap-2 bg-gradient-to-r from-[#E59560] to-[#F28C4C] text-white 
                                       font-medium shadow-md hover:from-[#F28C4C] hover:to-[#D77A3D] 
                                       transition-all duration-300 transform hover:scale-105">
                                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                                        Reset Password
                                    </a>
                                </button>
                                <div>
                                    <Link to="/login" className="btn btn-neutral w-full mt-4"><FaBackward />Back to Login</Link>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ForgetPasswordPage;
