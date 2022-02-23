import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import movieDB from "../../api/movieDB";
import { useOutletContext } from "react-router-dom";
import FilterMovies from "./FilterMovies";

const TopRatedMovies = () => {
  const [searchText] = useOutletContext("");

  return <FilterMovies url="top_rated" searchText={searchText}></FilterMovies>;
};

export default TopRatedMovies;
