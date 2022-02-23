import React from "react";
import { Navigate, useOutletContext, Outlet } from "react-router-dom";

const PublicRoute = ({ isAuthUser }) => {
  const [showIcon, setShowIcon] = useOutletContext();

  return !isAuthUser ? (
    <Outlet context={[showIcon, setShowIcon]} />
  ) : (
    <Navigate to={"/"}></Navigate>
  );
};

export default PublicRoute;
