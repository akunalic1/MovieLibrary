import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import movieDB from "../../api/movieDB";

const FilterMovies = ({ url, searchText }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieDB.get(`/${url}`, {
        params: {
          api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
        },
      });
      setMovies(response.data.results);
      setFilteredMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies)
      setFilteredMovies(
        movies.filter((movie) => {
          return movie.title
            .toUpperCase()
            .trim()
            .includes(searchText.toUpperCase().trim());
        })
      );
  }, [searchText]);

  return <MovieList movies={filteredMovies} />;
};

export default FilterMovies;
