import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { jwtDecode } from "jwt-decode";
import { AuthContext } from '../../Context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { state } = useLocation();


  const isLoggedIn = () => {
    const token = sessionStorage.getItem('access_token');
    if (!token) {
      return false;
    }

    const decodedToken = jwtDecode(token);
    const currentTime = new Date().getTime() / 1000;
    return decodedToken.exp > currentTime;
  }
  return user.email ? children : <Navigate to="/login" />
};

export default PrivateRoute;