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
        <a key={movie.id} href={`/${movie.id}`}>
          <div className="movie-item">
            <div className="poster-container">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <img src={defaultPosterURL} alt="No Poster" />
              )}
            </div>
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default MovieList;
