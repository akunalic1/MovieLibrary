import React from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";

const ProtectedRoute = ({ isAuthUser }) => {
  const [showIcon, setShowIcon] = useOutletContext();

  return isAuthUser ? (
    <Outlet context={[showIcon, setShowIcon]} />
  ) : (
    <Navigate to={"/home"}></Navigate>
  );
};

export default ProtectedRoute;
