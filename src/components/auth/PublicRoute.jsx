import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ isAuthUser }) => {
  return !isAuthUser ? <Outlet /> : <Navigate to={"/"}></Navigate>;
};

export default PublicRoute;
