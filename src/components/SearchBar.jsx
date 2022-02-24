import React, { useEffect, useState } from "react";
import "../css/searchBar.css";
import { Outlet, useOutletContext } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [showIcon, setShowIcon] = useOutletContext();

  useEffect(() => {
    setShowIcon(false);
  }, []);

  useEffect(() => {
    console.log(searchText);
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
      <Outlet context={[searchText]} />
    </div>
  );
};

export default SearchBar;
