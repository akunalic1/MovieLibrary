import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import "../../css/auth.css";

import { allStorage, signUpUser } from "../../storageActions";

const LogoutForm = ({ user, setUser }) => {
  const [showIcon, setShowIcon] = useOutletContext();
  console.log("user unutar logout forme", user);

  const navigate = useNavigate();

  useEffect(() => {
    setShowIcon(true);
  }, []);
  const onLogoutClick = () => {
    localStorage.removeItem("logedInUser");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="logout-form  display-gap-s margin-top">
      <div className="form glassmorphism">
        <h2>{user.email}</h2>
        <h4>Are you sure you want to log out?</h4>
        <button
          className="red-btn btn btn-full-w text-w-6"
          onClick={() => onLogoutClick()}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default LogoutForm;
