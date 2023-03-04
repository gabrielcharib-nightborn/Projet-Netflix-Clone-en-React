import React, { useState, useEffect } from "react";
import axios from 'axios';
import PopularNetflix from './PopularNetflix';


function FilmList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=b53b578e9859b87ecd3589202df57ca2&language=en-US&page=1");
      setFilms(response.data.results);
    }
    fetchFilms();
  }, []);

  return (
    <PopularNetflix films={films} />
  );
}

export default FilmList;
