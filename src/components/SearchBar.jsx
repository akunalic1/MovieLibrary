import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import "../css/searchBar.css";
import { Outlet } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  /*
   * todo: zamjeniti sa useRef() Hook !!!
   */
  if (document.getElementById("navbar"))
    document.getElementById("navbar").classList.add("navbar-color");
  if (document.getElementById("search-bar-icon"))
    document.getElementById("search-bar-icon").classList.add("hide");

  useEffect(() => {
    //if (currentMovies) dispatch(filterMovies(currentMovies, searchText));
  }, [searchText]);

  return (
    <div className="search-bar margin-top">
      <div className="search-wrapper display-flex-style">
        <input
          className="search-text"
          placeholder="Search movies..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>
      <Outlet />
    </div>
  );
};

export default SearchBar;
