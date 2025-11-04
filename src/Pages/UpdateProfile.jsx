import React, { useContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import petBg from '../assets/petBg.jpg';
import { AuthContext } from '../Provider/AuthContext';
import { getAuth, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const auth = getAuth();

    const navigate = useNavigate();

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        if (!auth.currentUser) {
            toast("No user found!");
            return;
        }

        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
            .then(() => {
                const updatedUser = {
                    ...user,
                    displayName: name,
                    photoURL: photoURL,
                };
                setUser(updatedUser);
                toast("(Updated)Profile updated successfully!");
            })
            .catch((error) => {
                toast("Failed to update profile: " + error.message);
            });
        navigate("/profile");

    };

    return (
        <div className="min-h-screen flex flex-col">
            <title>WarmPaws - Update Profile</title>
            <Navbar />

            <div
                className="flex-grow flex items-center justify-center bg-base-200 px-4 sm:px-6 md:px-10 py-8"
                style={{
                    backgroundImage: `url(${petBg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}
            >
                <div className="card bg-base-100 w-full max-w-md sm:max-w-lg shadow-xl rounded-lg bg-white border border-gray-200">
                    <div className="text-center py-2 bg-black text-white rounded-t-lg">
                        <h1 className="text-2xl font-bold pt-1">Update Your Profile</h1>
                    </div>

                    <div className="card-body bg-transparent px-6 py-4">
                        <form onSubmit={handleUpdateProfile} className="flex flex-col gap-3">
                            <div>
                                <label className="label text-black text-sm">Full Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="input input-bordered w-full h-9"
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label text-black text-sm">Photo URL</label>
                                <input
                                    type="text"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    className="input input-bordered w-full h-9"
                                    placeholder="Photo URL"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-neutral mt-2 w-full h-10 text-sm"
                            >
                                Update Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default UpdateProfile;
