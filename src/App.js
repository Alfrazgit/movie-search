import "./App.css";
import { useEffect, useState } from "react";
import searchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=f6fdb8a4";

const App = () => {
  const searchMovies = async (title) => {
    const respose = await fetch(`${API_URL}&s=${title}`);
    const data = await respose.json();

    setMovies(data.Search);
  };

  // useEffect(() => {
  //   searchMovies("Batman");
  // }, []);

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchValue}
          onChange={(event) => {setSearchValue(event.target.value)}}
        />
        <img 
          src={searchIcon} 
          alt="search" 
          onClick={() => {searchMovies(searchValue)}} 
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
