import React from "react";
import "./MovieList.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

interface MovieListProps {
  movies: Movie[];
}

const defaultPosterURL =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

function MovieList({ movies }: MovieListProps) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <div className="poster-container">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <img src={defaultPosterURL} alt="Default Poster" />
            )}
          </div>
          <h2>{movie.title}</h2>
          <p>{movie.release_date.substring(0, 4)}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
