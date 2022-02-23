import React from "react";
import { useOutletContext } from "react-router-dom";
import FilterMovies from "./FilterMovies";

const UpcomingMovies = () => {
  const [searchText] = useOutletContext("");
  return <FilterMovies url="upcoming" searchText={searchText}></FilterMovies>;
};

export default UpcomingMovies;
