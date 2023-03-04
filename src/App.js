import React, { useState,useEffect } from "react";
import "./css/HomePage.css"; 
import "./components/Film";
import PromoBanner from './components/PromoBanner';
import Film from "./components/Film";
import SocialIcon from "./components/SocialIcon";
import Menu  from "./components/Menu";
import PopularNetflix from "./components/PopularNetflix";
import SubLinks from "./components/SubLinks";
import NetflixOriginal from "./components/NetflixOriginal";
import TredingNow from "./components/TredingNow";
import SocialNetworkLogos from "./components/SocialNetworkLogos";
import axios from 'axios';

function App() {

  // mettre en place  le code pour les effect souris
  //const [isHovered, setIsHovered] = useState(false);
//   <div
//   onMouseEnter={() => setIsHovered(true)}
//   onMouseLeave={() => setIsHovered(false)}
//   style={{
//     width: 200,
//     height: 300,
//     boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.19)' : 'none',
//     transform: isHovered ? 'scale(1.1)' : 'scale(1)'
//   }}
// >
  // <img src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`} alt={film.title} />
  // <h2>{film.title}</h2>

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///todo : cree un composant pour l'appel de api c'est plus propre 
  ///
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=b53b578e9859b87ecd3589202df57ca2&language=en-US&page=1");
      setFilms(response.data.results);
    }
    fetchFilms();
  }, []);


          const Footer = ()=>{
            return (
              <footer>
              <p>©1997-2023 Netflix, Inc.</p>
              <p>Gabriel Charib © 2023</p>
            </footer>
            )
          }



  return (
    <div >

      <PopularNetflix films={films} />
      <TredingNow />
      <NetflixOriginal />
      <SocialIcon />
      <SocialNetworkLogos />
      <SubLinks />
      <Footer/>
    </div>
    
  );
}

export default App;