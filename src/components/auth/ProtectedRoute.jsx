import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthUser }) => {
  return isAuthUser ? <Outlet /> : <Navigate to={"/"}></Navigate>;
};

export default ProtectedRoute;
