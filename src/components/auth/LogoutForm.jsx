import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../css/auth.css";

const LogoutForm = ({ user }) => {
  console.log("user unutar logout forme", user);

  const navigate = useNavigate();

  const onLogoutClick = () => {
    navigate("/");
  };

  return (
    <div className="logout-form form glassmorphism display-flex-style text display-gap-s margin-top">
      <h2>{user.email}</h2>
      <h4>Are you sure you want to log out?</h4>
      <button
        className="red-btn btn btn-full-w text-w-6"
        onClick={() => onLogoutClick()}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutForm;
