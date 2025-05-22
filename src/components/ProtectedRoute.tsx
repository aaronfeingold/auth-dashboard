import React from "react";
import { Navigate } from "react-router-dom";

// TODO: Implement logic to check authentication
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const { isAuthenticated } = useAuth();
  // return isAuthenticated ? children : <Navigate to="/login" />;
  return <>{children}</>;
};

export default ProtectedRoute;
