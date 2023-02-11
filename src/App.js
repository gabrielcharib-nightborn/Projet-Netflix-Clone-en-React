import React, { useState } from "react";
import "./css/HomePage.css"; 
import "./components/Film";
import Film from "./components/Film";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMovies, setShowMovies] = useState(false);
  const films = [
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      image: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      image: "https://m.media-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_.jpg"
    },
    {
      title: "The Good, the Bad and the Ugly",
      description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      image: "https://m.media-amazon.com/images/M/MV5BOTQ"
    }];


      const Menu= () => {
        return (
          
       <div>
          <nav class="main-nav"> 
          <a id="logo" href="#home"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image"></img></a>               
            <a href="#home">Home</a>
            <a href="#tvShows">TV Shows</a>
            <a href="#movies">Movies</a>
            <a href="#originals">Originals</a>
            <a href="#">Recently Added</a>     
          </nav>
       </div>   
         

      
        )
        }

        const PopularNetflix= () => {
          return (
           
          <div class="location" id="home">
            <h1 id="home">Popular on Netflix</h1>
            <div class="box">
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true" alt=""></img></a>
              <a href=""> <Film  /></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" alt=""></img></a>
      
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p9.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p10.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p11.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p12.PNG?raw=true" alt=""></img></a>        
            </div>
        </div>
      
          )
          }


  
  return (
  
    <div >
      <Menu />
        <PopularNetflix/>
        {films.map((film, index) => (
                    <><Film title={film.title}  poster={film.image} description={film.description}/></>
                  ))}
    </div>
  );
}

export default App;
