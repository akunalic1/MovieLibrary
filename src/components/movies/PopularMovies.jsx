import React from "react";
import { useOutletContext } from "react-router-dom";
import FilterMovies from "./FilterMovies";

const PopularMovies = () => {
  const [searchText] = useOutletContext("");
  return <FilterMovies url="popular" searchText={searchText}></FilterMovies>;
};

export default PopularMovies;
