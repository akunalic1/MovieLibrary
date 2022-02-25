import React, { useEffect, useState } from "react";
import "../css/searchBar.css";
import { Outlet, useOutletContext } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [tempText, setTempText] = useState("");
  const [showIcon, setShowIcon] = useOutletContext();

  useEffect(() => {
    setShowIcon(false);
  }, []);

  useEffect(() => {
    if (searchText.length) {
      const timeoutId = setTimeout(() => {
        setTempText(searchText);
      }, 700);
      return () => clearTimeout(timeoutId);
    }
  }, [searchText]);

  return (
    <div className="search-bar">
      <div className="search-wrapper display-flex-style">
        <input
          className="search-text"
          placeholder="Search movies..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>
      <Outlet context={[tempText]} />
    </div>
  );
};

export default SearchBar;
