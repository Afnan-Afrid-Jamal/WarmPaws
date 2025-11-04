import React, { useContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import petBg from '../assets/petBg.jpg';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthContext';
import Spinner from '../Components/Spinner';
import { toast } from 'react-toastify';
import { TbEyeglass, TbEyeglassFilled } from 'react-icons/tb';

const SignUp = () => {
    const { customCreateUserWithEmailAndPassword, customSignInWithPopup, setGetUserName, setGetUserPhotoUrl, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [checkPassword, setCheckPassword] = useState("");
    const [passwordHide, setPasswordHide] = useState(true);

    // Password validation checks
    const hasUppercase = /[A-Z]/.test(checkPassword);
    const hasLowercase = /[a-z]/.test(checkPassword);
    const hasNumber = /[0-9]/.test(checkPassword);
    const hasSymbol = /[^A-Za-z0-9]/.test(checkPassword);
    const hasMinLength = checkPassword.length >= 6;

    // Handle Register
    // Handle Register - FIXED
    const handleRegister = (event) => {
        event.preventDefault();
        const userEmail = event.target.email.value;
        const userName = event.target.name.value;
        const userPhotoUrl = event.target.photoUrl.value;
        const userPassword = event.target.password.value;

        if (!(hasUppercase && hasLowercase && hasNumber && hasSymbol && hasMinLength)) {
            toast("❌ Please enter a valid password to submit");
            return;
        }

        // Directly pass name and photo URL to function
        customCreateUserWithEmailAndPassword(userEmail, userPassword, userName, userPhotoUrl)
            .then(() => {
                navigate("/home");
            })
            .catch((error) => {
                console.error("Registration error:", error);
                toast("❌ Registration failed!");
            });
    };
    // Google SignUp
    const handleRegisterWithGoogle = () => {
        customSignInWithPopup()
            .then(() => {
                if (location.state) {
                    navigate(location.state);
                } else {
                    navigate("/home");
                }
            })
            .catch((error) => {
                console.error(error);
                toast("❌ Google registration failed!");
            });
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <title>WarmPaws - Sign Up</title>
            <Navbar />
            <div
                className="flex-grow flex items-center justify-center bg-base-200 px-4 sm:px-6 md:px-10 py-8"
                style={{
                    backgroundImage: `url(${petBg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}
            >
                <div className="card w-full max-w-md sm:max-w-lg shadow-xl rounded-lg bg-white border border-gray-200">
                    <div className="text-center py-2 bg-black text-white rounded-t-lg">
                        <h1 className="text-2xl font-bold pt-1">Register Now!</h1>
                        <p className="text-sm">Start Caring Today with WarmPaws</p>
                    </div>

                    <div className="card-body bg-transparent px-6 py-4">
                        <form onSubmit={handleRegister} className="flex flex-col gap-3">
                            <div>
                                <label className="label text-black text-sm">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="input input-bordered w-full h-9"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="label text-black text-sm">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full h-9"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="label text-black text-sm">Photo URL</label>
                                <input
                                    type="text"
                                    name="photoUrl"
                                    className="input input-bordered w-full h-9"
                                    placeholder="Photo URL"
                                />
                            </div>

                            <div>
                                <label className="label text-black text-sm">Password</label>
                                <div className="flex items-center relative">
                                    <input
                                        type={passwordHide ? "password" : "text"}
                                        name="password"
                                        className="input input-bordered w-full h-9"
                                        placeholder="Password"
                                        required
                                        onChange={(e) => setCheckPassword(e.target.value)}
                                    />
                                    <div
                                        onClick={() => setPasswordHide(!passwordHide)}
                                        className="absolute cursor-pointer right-3 z-50"
                                    >
                                        {passwordHide ? <TbEyeglassFilled size={24} /> : <TbEyeglass size={24} />}
                                    </div>
                                </div>

                                {/* Password Validation Messages */}
                                <div className="min-h-22">
                                    {checkPassword.length > 0 && (
                                        <div className="pt-3 text-[10px] text-red-600 transition-all duration-300 space-y-1">
                                            {!hasUppercase && <p>❌ Must include at least one uppercase letter (A–Z)</p>}
                                            {!hasLowercase && <p>❌ Must include at least one lowercase letter (a–z)</p>}
                                            {!hasNumber && <p>❌ Must include at least one number (0–9)</p>}
                                            {!hasSymbol && <p>❌ Must include at least one special symbol (@, #, $, %, etc.)</p>}
                                            {!hasMinLength && <p>❌ Must be at least 6 characters long</p>}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-neutral mt-2 w-full h-10 text-sm">
                                Register
                            </button>
                        </form>

                        <button
                            onClick={handleRegisterWithGoogle}
                            className="btn mt-3 w-full h-10 flex items-center justify-center gap-2 text-black bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 hover:from-red-600 hover:via-yellow-600 hover:to-green-600 text-white text-sm"
                        >
                            <FcGoogle size={18} /> Register with Google
                        </button>

                        <p className="text-center mt-3 text-sm">
                            Already have an account?
                            <Link to="/login">
                                <span className="text-blue-500 hover:text-blue-700 hover:underline ml-1">
                                    Login
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;
