import React, { useContext, useRef, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import petBg from '../assets/petBg.jpg';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthContext';
import Spinner from '../Components/Spinner';
import { TbEyeglass, TbEyeglassFilled } from 'react-icons/tb';

const Login = () => {
    const { user, customSignInWithEmailAndPassword, customSignInWithPopup, setGetEmailRef, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const emailRef = useRef();

    const [passwordHide, setPasswordHide] = useState(true);

    const handleLogin = (event) => {
        event.preventDefault();
        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;

        customSignInWithEmailAndPassword(userEmail, userPassword)
            .then(() => {
                if (location.state) navigate(location.state);
                else navigate("/home");
            });
    };

    const handleLoginWithGoogle = () => {
        customSignInWithPopup()
            .then(() => {
                if (location.state) navigate(location.state);
                else navigate("/home");
            });
    };

    console.log(user)

    if (loading) return <Spinner />;

    return (
        <div className="min-h-screen flex flex-col">
            <title>WarmPaws - Login</title>
            <Navbar />
            <div
                className="flex-grow flex items-center justify-center bg-base-200 px-4 sm:px-6 md:px-10 py-8"
                style={{ backgroundImage: `url(${petBg})`, backgroundSize: 'contain', backgroundPosition: 'center' }}
            >
                <div className="card w-full max-w-md sm:max-w-lg shadow-xl rounded-lg bg-white border border-gray-200">
                    <div className="text-center py-2 bg-black text-white rounded-t-lg">
                        <h1 className="text-2xl font-bold pt-1">Login now!</h1>
                        <p className="text-sm">Your Pets Miss You</p>
                    </div>
                    <div className="card-body bg-transparent px-6 py-4">
                        <form onSubmit={handleLogin} className="flex flex-col gap-3">
                            <div>
                                <label className="label text-black text-sm">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full h-9"
                                    placeholder="Email"
                                    required
                                    ref={emailRef}
                                />
                            </div>
                            <div>
                                <label className="label text-black text-sm">Password</label>
                                <div className='flex items-center relative'>
                                    <input
                                        type={passwordHide ? "password" : "text"}
                                        name="password"
                                        className="input input-bordered w-full h-9"
                                        placeholder="Password"
                                        required
                                    />
                                    <div onClick={() => setPasswordHide(!passwordHide)} className="absolute cursor-pointer right-3 z-50">
                                        {passwordHide ? <TbEyeglassFilled size={24} /> : <TbEyeglass size={24} />}
                                    </div>
                                </div>


                            </div>
                            <div className="text-right">
                                <Link
                                    to="/forgot-password"
                                    onClick={() => setGetEmailRef(emailRef.current.value)}
                                    className="link link-hover text-sm hover:text-blue-500"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <button className="btn btn-neutral mt-2 w-full h-10 text-sm">
                                Login
                            </button>
                        </form>

                        <button
                            onClick={handleLoginWithGoogle}
                            className="btn mt-3 w-full h-10 flex items-center justify-center gap-2 text-black bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 hover:from-red-600 hover:via-yellow-600 hover:to-green-600 text-sm"
                        >
                            <FcGoogle size={18} /> Login with Google
                        </button>

                        <p className="text-center mt-3 text-sm">
                            Don't have an account?
                            <Link to="/signup">
                                <span className="text-blue-500 hover:text-blue-700 hover:underline ml-1">Register</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
