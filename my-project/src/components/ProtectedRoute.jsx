// src/components/ProtectedRoute.js

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserProvider';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  return user ? children : <Navigate to="/login" />; // Redirige vers /login si non connecté
};

export default ProtectedRoute;
