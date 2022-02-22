import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  return <MovieList movies={movies} />;
};

export default UpcomingMovies;
