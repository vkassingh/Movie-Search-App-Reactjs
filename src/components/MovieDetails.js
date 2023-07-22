import React from "react";

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Director: {movie.Director}</p>
      <p>Plot: {movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default MovieDetails;
