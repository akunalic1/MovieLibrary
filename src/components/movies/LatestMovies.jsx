import React from "react";
import { useOutletContext } from "react-router-dom";
import FilterMovies from "./FilterMovies";

const LatestMovies = () => {
  const [searchText] = useOutletContext("");
  return <FilterMovies url="latest" searchText={searchText}></FilterMovies>;
};

export default LatestMovies;
