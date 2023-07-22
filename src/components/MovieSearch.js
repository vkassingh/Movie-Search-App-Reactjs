import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=597e4123`
      );
      setMovies(response.data.Search);
    } catch (error) {
      console.error(error);
      setMovies([]);
    }
  };

  return (
    <div className="MovieSearch">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="movie-card-container">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <h2 className="movie-title">{movie.Title}</h2>
            <p className="movie-year">Year: {movie.Year}</p>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="movie-poster"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
