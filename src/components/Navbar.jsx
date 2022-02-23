import React, { createRef, useEffect, useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { faColonSign, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../css/navbar.css";

const Navbar = ({ isAuthUser }) => {
  const [showIcon, setShowIcon] = useState(true);
  const [showLinks, setShowLinks] = useState(true);

  const links = ["latest", "upcoming", "best-rated", "popular"];

  const searchIconRef = createRef();
  useEffect(() => {
    if (showIcon) searchIconRef.current.classList.remove("hide");
    else searchIconRef.current.classList.add("hide");
  }, [showIcon]);

  return (
    <div>
      <div className="movie-links navbar navbar-color" id="navbar">
        <div className="logo">
          <Link to="/home">
            <FontAwesomeIcon className="movie-icon" icon={faFilm} />
            MOVIE<span className="text-red">Library</span>
          </Link>
        </div>
        <div className="links">
          <Link to={`/movies/${links[0]}`}>Latest</Link>
          <Link to={`/movies/${links[1]}`}>Upcoming</Link>
          <Link to={`/movies/${links[2]}`}>Best Rated</Link>
          <Link to={`/movies/${links[3]}`}>Popular</Link>
          <Link to={`/movies/${links[3]}`}>
            <div ref={searchIconRef}>
              <FontAwesomeIcon icon={faMagnifyingGlass} id="search-bar-icon" />
            </div>
          </Link>
        </div>
        {!isAuthUser ? (
          <div className="buttons">
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
      <Outlet context={[showIcon, setShowIcon]} />
    </div>
  );
};

export default Navbar;
