import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MoviePage.css";

interface Genre {
  id: number;
  name: string;
}

interface MovieDetails {
  title: string;
  genres: Genre[];
  original_language: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  budget: number;
}

const defaultPosterURL =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const {
    title,
    genres,
    original_language,
    poster_path,
    overview,
    vote_average,
    budget,
  } = movieDetails;

  return (
    <div className="movie-details">
      <h1 className="title">{title}</h1>
      <div className="content">
        <div className="poster-container">
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${poster_path}`}
              alt={title}
            />
          ) : (
            <img src={defaultPosterURL} alt="No Poster" />
          )}
        </div>
        <div className="details">
          <p>
            <strong>Overview:</strong> {overview}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Original Language:</strong> {original_language}
          </p>
          <p>
            <strong>Average vote:</strong> {vote_average}
          </p>
          <p>
            <strong>Budget:</strong> {budget}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
