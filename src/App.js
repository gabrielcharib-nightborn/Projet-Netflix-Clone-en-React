import React, { useState } from "react";
import "./css/HomePage.css"; 
import "./components/Film";
import Film from "./components/Film";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMovies, setShowMovies] = useState(false);
  const movies = [
    { name: "The Shawshank Redemption", year: 1994 },
    { name: "The Godfather", year: 1972 },
    { name: "The Godfather: Part II", year: 1974 },
    { name: "The Dark Knight", year: 2008 },
    { name: "12 Angry Men", year: 1957 }
  ];

  return (
    <div className="HomePage">
      <header className="header">
        <h1 className="logo">Netflix</h1>
        <nav>
          <button
            className="header-menu-toggle"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? "Close" : "Menu"}
          </button>
          <ul className={`header-menu ${showMenu ? "show" : ""}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#" onClick={() => setShowMovies(!showMovies)}>
                Movies
              </a>
              {showMovies && (
                <ul className="movies-list">
                  {movies.map((movie, index) => (
                    <li key={index}>{movie.name} ({movie.year})</li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a href="#">Recently Added</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h2 className="main-title">Watch Anywhere</h2>
        <p className="main-text">
          Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
        </p>
        <button className="main-cta">Join Free for 30 Days</button>
      </main>
    </div>
  );
}

export default App;
