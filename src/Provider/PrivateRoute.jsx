import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../Components/Spinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner></Spinner>
    }

    if (user) {
        return children;
    }
    else
        return <Navigate to="/login" state={location.pathname} />;

};

export default PrivateRoute;
