import React from "react";
import "./../css/landingPage.css";

const LandingPage = () => {
  if (document.getElementById("search-bar-icon"))
    document.getElementById("search-bar-icon").classList.remove("hide");
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
