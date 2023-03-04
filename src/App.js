import React, { useState,useEffect } from "react";
import "./css/HomePage.css"; 
import "./components/Film";
import PromoBanner from './components/PromoBanner';
import SocialIcon from "./components/SocialIcon";
import Menu  from "./components/Menu";
import Footer from "./components/Footer";
import SubLinks from "./components/SubLinks";
import NetflixOriginal from "./components/NetflixOriginal";
import TredingNow from "./components/TredingNow";
import SocialNetworkLogos from "./components/SocialNetworkLogos";
import FilmList from './components/FilmList';

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


  return (
    <div >
      <Menu/>
      <PromoBanner />
      <FilmList/>
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