import React from "react";

interface MovieProps {
  key: number;
  movie: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
  };
}

const Movie: React.FC<MovieProps> = ({ key, movie }) => {
  return (
    <div key={key}>
      <h2>{movie.title}</h2>
      <img src={movie.poster_path} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Vote Average: {movie.vote_average}</p>
    </div>
  );
};

export default Movie;
