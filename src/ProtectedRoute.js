import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, path, ...props }) => {
  const  isAuthenticated  = localStorage.getItem("login");

  return isAuthenticated==="true" ? (
    children
  ) : (
    <>
       <Navigate to="/login-form" replace="true" />
    </>
  );
};

export default ProtectedRoute;
