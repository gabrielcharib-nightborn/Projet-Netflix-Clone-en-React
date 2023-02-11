import React, { useState } from "react";
import "./css/HomePage.css"; 
import "./components/Film";
import PromoBanner from './components/PromoBanner';
import Film from "./components/Film";
import SocialIcon from "./components/SocialIcon";
import BackgroundVideo from "./components/BackgroundVideo";



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


  //  {films.map((film, index) => (
  //    <><Film title={film.title}  poster={film.image} description={film.description}/></>
//))}


      const Menu= () => {
        return (
       <div>
          <nav className="main-nav"> 
          <a id="logo" href="#home"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image"></img></a>               
            <a href="#home">Home</a>
            <a href="#tvShows">TV Shows</a>
            <a href="#movies">Movies</a>
            <a href="#originals">Originals</a>
            <a href="#">Recently   Added</a>
            </nav> 
          <nav class="sub-nav">

   
          <a href="#"><i className="fas fa-search sub-nav-logo"></i></a>
          <a href="#"><i className="fas fa-bell sub-nav-logo"></i></a>       
          </nav>
       </div>   
        )
        }

        const TredingNow = () =>{
          return (
            <div>
              <h1 id="myList">Trending Now</h1>
                <div className="box">
                  <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t1.PNG?raw=true" alt=""></img></a>
                  <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t2.PNG?raw=true" alt=""></img></a>
                  <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t3.PNG?raw=true" alt=""></img></a>
                  <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t4.PNG?raw=true" alt=""></img></a>
                  <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t5.PNG?raw=true" alt=""></img></a>
                  <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true" alt=""></img></a>                  
                </div>
            </div>
          )

        }

        const PopularNetflix= () => {
          return (
           
          <div className="location" id="home">
            <h1 id="home">Popular on Netflix</h1>
            <div class="box">
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true" alt=""></img></a>
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
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p9.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p10.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p11.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p12.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p11.PNG?raw=true" alt=""></img></a>         
            </div>
        </div>
          )
          }


          const Footer = ()=>{

            return (
              <footer>
              <p>©1997-2023 Netflix, Inc.</p>
              <p>Gabriel Charib © 2023</p>
            </footer>
            )
          }
        const Leslogos = () => {
          ///////////////////////////////////////////////////////
          //pour l'instant j'arrive pas a utiliser des icones fa 
          //////////////////////////////////////////////////////
          return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="#" style={{ marginRight: '10px' }}>
            </a>
            <a href="#"><i className="fab fa-facebook-square fa-2x logo"></i></a>
            <a href="#"><i className="fab fa-instagram fa-2x logo"></i></a>
            <a href="#"><i className="fab fa-twitter fa-2x logo"></i></a>
            <a href="#"><i className="fab fa-youtube fa-2x logo"></i></a>
          </div>
          )
        }
        const NetflixOriginal = () =>{
          
          return(
            <div >
            <h1>Netflix Originals</h1>
            <div class="box">
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o2.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o3.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o4.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o5.PNG?raw=true" alt=""></img></a>
              <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o6.PNG?raw=true" alt=""></img></a>                
            </div>
            </div>
          )
        }



          const SubLinks = ()=> {
            return (
              <div className="sub-links">
                  
          <ul>
            <li><a href="#">Audio and Subtitles</a></li>
            <li><a href="#">Audio Description</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Legal Notices</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
            )
          }


  
  return (
  
    <div >
        <Menu />
        <BackgroundVideo />
        <PromoBanner />    
        <PopularNetflix/>
        <TredingNow />
        <NetflixOriginal />
        <SocialIcon />
        <Leslogos />
        <SubLinks />
        <Footer/>
    </div>
    
  );
}

export default App;
