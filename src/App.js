import React, { useState } from "react";
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
  const films = [
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true"
    },
    {
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t2.PNG?raw=true"
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true"
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t3.PNG?raw=true"
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t4.PNG?raw=true"
    },
    {
      title: "The Good, the Bad and the Ugly",
      description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t5.PNG?raw=true"
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true"
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t7.PNG?raw=true"
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t8.PNG?raw=true"
    },
    {
      title: "The Good, the Bad and the Ugly",
      description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true"
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true"
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true"
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true"
    },
    {
      title: "The Good, the Bad and the Ugly",
      description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t13.PNG?raw=true"
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/14.PNG?raw=true"
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t15.PNG?raw=true"
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t16.PNG?raw=true"
    },
    {
      title: "The Good, the Bad and the Ugly",
      description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t17.PNG?raw=true"
    }
  
  
  
  ];


  //  {films.map((film, index) => (
  //    <><Film title={film.title}  poster={film.image} description={film.description}/></>
//))}

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
      <Menu />
      <PromoBanner /> 
      <PopularNetflix films={films}/>
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
