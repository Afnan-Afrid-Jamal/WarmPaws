import React, { useEffect, useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updateProfile
} from "firebase/auth";
import { AuthContext } from './AuthContext';
import app from '../FireBase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
import Spinner from '../Components/Spinner';
import { toast } from 'react-toastify';

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [getEmailRef, setGetEmailRef] = useState("");

    const provider = new GoogleAuthProvider();

    // Register With Email and Password
    const customCreateUserWithEmailAndPassword = (email, password, userName, userPhotoUrl) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = userCredential.user;

                // Update Profile with direct parameters
                return updateProfile(newUser, {
                    displayName: userName,
                    photoURL: userPhotoUrl || "https://i.ibb.co.com/RGCchFdt/user-Images.png"
                })
                    .then(() => {
                        toast("Registration successful!");

                        const updatedUser = {
                            ...newUser,
                            displayName: userName,
                            photoURL: userPhotoUrl || "https://i.ibb.co.com/RGCchFdt/user-Images.png"
                        };
                        setUser(updatedUser);

                        setLoading(false);
                        return updatedUser;
                    });
            })
            .catch((error) => {
                toast("Registration failed: " + error.message);
                setLoading(false);
            });
    };

    // Login With Email and Password
    const customSignInWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                toast("Login successful!");
                setLoading(false);
            })
            .catch((error) => {
                toast("Login failed: " + error.message);
                setLoading(false);
            });
    };

    // Login With Google
    const customSignInWithPopup = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
            .then((userCredential) => {
                setUser(userCredential.user);
                toast("Google login successful!");
                setLoading(false);
                return userCredential.user;
            })
            .catch((error) => {
                toast("Google login failed: " + error.message);
                setLoading(false);
            });
    };

    // LogOut
    const customHandleLogOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUser(null);
                toast("Logged out successfully!");
                setLoading(false);
            })
            .catch((error) => {
                toast("Logout failed: " + error.message);
                setLoading(false);
            });
    };

    // Forget Password
    const customHandleForgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
            .then(() => {
                toast("Password reset email sent!");
            })
            .catch((error) => toast("Password reset failed: " + error.message));

    };

    // Observer
    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [auth]);

    const authData = {
        user,
        setUser,
        customCreateUserWithEmailAndPassword,
        customSignInWithEmailAndPassword,
        customSignInWithPopup,
        customHandleLogOut,
        setGetEmailRef,
        getEmailRef,
        customHandleForgetPassword,
        setLoading,
        loading
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;