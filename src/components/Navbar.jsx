import React, { createRef, useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { faColonSign, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import "../css/navbar.css";

const Navbar = ({ isAuthUser }) => {
  const [showIcon, setShowIcon] = useState(true);
  const [showLinks, setShowLinks] = useState(true);

  const navigate = useNavigate();

  const links = ["latest", "upcoming", "best-rated", "popular"];

  const searchIconRef = createRef();
  useEffect(() => {
    if (showIcon) searchIconRef.current.classList.remove("hide");
    else searchIconRef.current.classList.add("hide");
  }, [showIcon]);

  return (
    <div>
      <div className="navbar navbar-color" id="navbar">
        <div className="leftSide">
          <button className="barsBtn" onClick={(e) => setShowLinks(!showLinks)}>
            <FontAwesomeIcon icon={faBars} id="bars-icon" />
          </button>
          <div className="logo">
            <Link to="/home">
              <FontAwesomeIcon className="movie-icon" icon={faFilm} />
              MOVIE<span className="text-red">Library</span>
            </Link>
          </div>
          <div className="links" id={showLinks ? "hidden" : ""}>
            <button
              id="homeBtn"
              className="homeBtn"
              onClick={(e) => navigate("/home")}
            >
              <FontAwesomeIcon icon={faHome} />
            </button>
            <Link to={`/movies/${links[0]}`}>Latest</Link>
            <Link to={`/movies/${links[1]}`}>Upcoming</Link>
            <Link to={`/movies/${links[2]}`}>Best Rated</Link>
            <Link to={`/movies/${links[3]}`}>Popular</Link>
            <Link to={`/movies/${links[3]}`}>
              <div id="searchBtn" ref={searchIconRef}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  id="search-bar-icon"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="rightSide">
          {!isAuthUser ? (
            <div className="buttons display-flex-style">
              <Link
                className="black-btn btn btn-radius white-border"
                to="/auth/signup"
              >
                Sign Up
              </Link>
              <Link className="red-btn btn btn-radius" to="/auth/login">
                Log In
              </Link>
            </div>
          ) : (
            <div className="buttons">
              <Link
                className="black-btn btn btn-radius white-border"
                to="/auth/logout"
              >
                Log Out
              </Link>

              <Link
                className="red-btn btn btn-radius white-border"
                to="/auth/account"
              >
                Account
              </Link>
            </div>
          )}
        </div>
      </div>
      <Outlet context={[showIcon, setShowIcon]} />
    </div>
  );
};

export default Navbar;
