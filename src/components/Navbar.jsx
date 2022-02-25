import React, { createRef, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import "../css/navbar.css";

const Navbar = ({ isAuthUser }) => {
  /*
   * hooks
   */
  const [showIcon, setShowIcon] = useState(true);
  const [showLinks, setShowLinks] = useState(false);
  const [navbarColor, setNavbarColor] = useState(true);
  const searchIconRef = createRef();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, [window.scrollY]);

  useEffect(() => {
    if (window.location.pathname === "/") navigate("/home");
  }, [window.location.pathname]);

  useEffect(() => {
    showIcon
      ? searchIconRef.current.classList.remove("hide")
      : searchIconRef.current.classList.add("hide");
  }, [showIcon]);

  /*
   * functions
   */

  const setStyle = ({ isActive }) =>
    isActive
      ? { borderBottom: "2px solid white", paddingBottom: "5px" }
      : undefined;

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 20) {
      setNavbarColor(true);
    } else if (window.scrollY <= 20) {
      setNavbarColor(false);
    }
  };
  return (
    <div>
      <div
        className={`navbar ${navbarColor ? "navbar-color" : ""}`}
        id="navbar"
      >
        {/*
         * left side
         */}
        <div className="leftSide">
          <button className="barsBtn" onClick={(e) => setShowLinks(!showLinks)}>
            <FontAwesomeIcon icon={faBars} id="bars-icon" />
          </button>
          <div className="logo">
            <NavLink to="/home">
              <FontAwesomeIcon className="movie-icon" icon={faFilm} />
              MOVIE<span className="text-red">Library</span>
            </NavLink>
          </div>
        </div>
        {/*
         * middle side
         */}
        <div className="middle">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <button
              id="homeBtn"
              className="homeBtn"
              onClick={(e) => navigate("/home")}
            >
              <FontAwesomeIcon icon={faHome} />
            </button>
            <NavLink style={setStyle} to={`/movies/latest`}>
              Latest
            </NavLink>
            <NavLink style={setStyle} to={`/movies/upcoming`}>
              Upcoming
            </NavLink>
            <NavLink style={setStyle} to={`/movies/top_rated`}>
              Top Rated
            </NavLink>
            <NavLink style={setStyle} to={`/movies/popular`}>
              Popular
            </NavLink>
            <NavLink style={setStyle} to={`/movies/popular`}>
              <div id="searchBtn" ref={searchIconRef}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  id="search-bar-icon"
                />
              </div>
            </NavLink>
          </div>
        </div>
        {/*
         *right side
         */}
        <div className="rightSide">
          {!isAuthUser ? (
            <div className="buttons ">
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
