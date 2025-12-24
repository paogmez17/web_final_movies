import React from "react";
import "./MoviesList.css";

function MoviesList({ movies }) {
  if (!movies.length) {
    return null;
  }

  return (
    <section className="movies">
      {movies.map((movie, index) => (
        <article key={`${movie.imdbID}-${index}`} className="movies__item">
          {movie.Poster !== "N/A" && (
            <img
              className="movies__poster"
              src={movie.Poster}
              alt={movie.Title}
            />
          )}
          <h3 className="movies__title">{movie.Title}</h3>
          <p className="movies__year">{movie.Year}</p>
        </article>
      ))}
    </section>
  );
}

export default MoviesList;
