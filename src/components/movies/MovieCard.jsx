import React from "react";
import { Link } from "react-router-dom";

import "../../css/movieCard.css";
import MovieCardInfo from "./MovieCardInfo";

import { MOVIE_IMAGE_PATH } from "../../constants";

const MovieCard = ({ movie }) => {
  const _setSelectedMovie = () => {
    //todo
  };
  return (
    <Link
      onClick={() => _setSelectedMovie()}
      className="movie-card-link"
      to={`/movies/${movie.id}`}
    >
      <div className="movie-card" key={movie.id}>
        <img
          className="movie-image"
          src={`${MOVIE_IMAGE_PATH}${movie.poster_path}`}
        ></img>
        <MovieCardInfo
          title={movie.title}
          overview={movie.overview}
          averageVote={movie.vote_average}
          releaseDate={movie.release_date}
        ></MovieCardInfo>
      </div>
    </Link>
  );
};

export default MovieCard;
