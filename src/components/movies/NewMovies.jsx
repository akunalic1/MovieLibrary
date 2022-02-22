import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import movieDB from "./../../api/movieDB";

const NewMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieDB.get("/latest", {
        params: {
          api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
        },
      });
      console.log(response.data.results);
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return <MovieList movies={movies} />;
};

export default NewMovies;
