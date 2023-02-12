import React from "react";

function SocialNetworkLogos (props){
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


  export default SocialNetworkLogos