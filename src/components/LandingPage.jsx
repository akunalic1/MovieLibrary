import React, { useEffect } from "react";
import "./../css/landingPage.css";
import { useOutletContext } from "react-router-dom";

const LandingPage = () => {
  const [showIcon, setShowIcon] = useOutletContext();

  useEffect(() => {
    setShowIcon(true);
  }, []);
  return (
    <div className="landing display-flex-style">
      <div className="landing-welcome text-align">
        <span>WELCOME TO</span>
        <div className="logo">
          <span>MOVIE</span>
          <span className="logo-name text-red">Library</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
