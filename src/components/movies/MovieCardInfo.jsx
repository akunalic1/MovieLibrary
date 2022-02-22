import React from "react";

const MovieCardInfo = ({ title, overview, averageVote, releaseDate }) => {
  return (
    <div className="movie-card-info">
      <h4 className="movie-title">{title}</h4>
      <h5 className="movie-average-vote">
        <span>VOTE</span>
        <span>{averageVote}/10</span>
      </h5>
      <h5 className="movie-release-date">
        <span>Release date</span>
        <span>{releaseDate}</span>
      </h5>
      <h5 className="movie-overview">{overview}</h5>
    </div>
  );
};

export default MovieCardInfo;
