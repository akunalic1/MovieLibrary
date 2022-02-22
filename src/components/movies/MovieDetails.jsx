import { faPerson, faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MOVIE_IMAGE_PATH } from "../../constants";

import "../../css/movieDetails.css";
import "../../css/auth.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    //    dispatch(fetchMovie(id, setMovie));
  }, []);

  const renderGenres = (movie) => {
    if (movie.genres)
      return movie.genres.map((genre) => {
        return <span key={genre.id}>{genre.name} | </span>;
      });
  };
  if (movie) {
    document.getElementById("navbar").classList.remove("navbar-color");
    document.getElementById("search-bar-icon").classList.remove("hide");
    return (
      <div className="details-container">
        <div className="image-container">
          <img
            className="movie-img"
            src={`${MOVIE_IMAGE_PATH}${movie.backdrop_path}`}
          ></img>
        </div>
        <div className="movie-detail-info">
          <div className="movie-detail-info-inner glassmorphism">
            <p className="movie-detail-title">{movie.title}</p>
            <div className="some-info">
              <p>
                {movie.release_date} | {movie.runtime} min |{" "}
                {renderGenres(movie)} {movie.status}
              </p>
            </div>
            <p>{movie.overview}</p>
            <div className="vote">
              <p className="number-of-votes">
                <FontAwesomeIcon icon={faPerson} />
                <span>{movie.vote_count}</span>
              </p>
              <p className="movie-vote">
                <FontAwesomeIcon icon={faStar} />
                <span>{movie.vote_average}/10</span>
              </p>
            </div>
          </div>
          <a
            href={`${movie.homepage}`}
            className="movie-homepage"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go To Movie Homepage
          </a>
        </div>
      </div>
    );
  }
  return null;
};

export default MovieDetails;
