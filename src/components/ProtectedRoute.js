import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, page }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const isConfigured = localStorage.getItem('isConfigured') === 'true';

  if (page === 'configure') {
    if (!isAuthenticated) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  } else if (page === 'dashboard') {
    if (!isAuthenticated) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
    if (!isConfigured) {
      return <Navigate to="/configure" state={{ from: location }} replace />;
    }
  }

  return children;
};

export default ProtectedRoute;