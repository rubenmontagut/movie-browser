import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import MovieList from "./MovieList/MovileList";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies("man");
  }, []);

  const fetchMovies = async (query: string) => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = (query: string) => {
    fetchMovies(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
