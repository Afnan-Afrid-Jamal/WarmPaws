import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import HomePage from "../Pages/HomePage";
import ViewDetails from "../Components/ViewDetails";
import Spinner from "../Components/Spinner";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Pages/Login";
import MyProfilePage from "../Pages/MyProfilePage";
import SignUp from "../Pages/SignUp";
import ServicePage from "../Pages/ServicePage";
import PrivateRoute from "../Provider/PrivateRoute";
import ForgetPasswordPage from "../Pages/ForgetPasswordPage";
import UpdateProfile from "../Pages/UpdateProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" />,
                loader: () => fetch("/petCareServiceJsonData.json"),
                hydrateFallbackElement: <Spinner></Spinner>
            },
            {
                path: "home",
                element: <HomePage />,
                loader: () => fetch("/petCareServiceJsonData.json"),
                hydrateFallbackElement: <Spinner></Spinner>
            },
            {
                path: "home/:id",
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: () => fetch("/petCareServiceJsonData.json"),
                hydrateFallbackElement: <Spinner></Spinner>
            },
            {
                path: "service",
                element: <ServicePage></ServicePage>,
                loader: () => fetch("/petCareServiceJsonData.json"),
                hydrateFallbackElement: <Spinner></Spinner>
            },
        ],
    },
    {
        path: "login",
        element: <Login></Login>,
    },
    {
        path: "signup",
        element: <SignUp></SignUp>
    },
    {
        path: "/forgot-password",
        element: <ForgetPasswordPage></ForgetPasswordPage>,
    },
    {
        path: "profile",
        element: (
            <PrivateRoute>
                <MyProfilePage></MyProfilePage>
            </PrivateRoute>
        ),
    },
    {
        path: "update-profile",
        element: (
            <PrivateRoute>
                <UpdateProfile></UpdateProfile>
            </PrivateRoute>
        ),
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
]);

export default router;
