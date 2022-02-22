import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

const BestRatedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  return <MovieList movies={movies} />;
};

export default BestRatedMovies;
