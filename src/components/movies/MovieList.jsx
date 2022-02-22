import React from "react";
import MovieCard from "./MovieCard";

import "../../css/movieList.css";

const MovieList = ({ movies }) => {
  const renderMovies = () => {
    if (movies)
      return movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie}></MovieCard>;
      });
    else return <h1 className="no-movies">No movies in this category</h1>;
  };

  return <div className="movie-list">{renderMovies()}</div>;
};

export default MovieList;
