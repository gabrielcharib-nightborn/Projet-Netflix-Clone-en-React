import React from "react";

function Menu (props){
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

    export default Menu;