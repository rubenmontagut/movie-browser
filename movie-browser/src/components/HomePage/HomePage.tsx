import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import MovieList from "./MovieList/MovileList";

function HomePage() {
  const [movies, setMovies] = useState<[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const query = "man";
        const apiKey = process.env.REACT_APP_API_KEY;
        console.log(apiKey);
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=caa2ab782031a4d2947070be75f29e74`;

        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {/* <SearchBar /> */}
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
