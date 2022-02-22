import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthUser }) => {
  return isAuthUser ? <Outlet /> : <Navigate to={"/"}></Navigate>;
};

export default ProtectedRoute;
