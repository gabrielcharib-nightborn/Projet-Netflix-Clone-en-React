import React from "react";

function PopularNetflix  (props) {
    return (
        <div className="location" id="home">
        <h1 id="home">Popular on Netflix</h1>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {props.films.map((films) => (
              <div key={films.id} style={{width: '18%', margin: '9px'}}>
              <img src={films.image} alt={films.title} style={{width: '100%'}} />
              <h3 style={{textAlign: 'center'}}>{films.title}</h3>
        </div>
         ))}
        </div> 
        </div>
    )
    }

    export default PopularNetflix;