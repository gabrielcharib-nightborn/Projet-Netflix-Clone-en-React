import React from "react";

function Film(props) {
  return (
    <div className="film">
      <img src={props.poster} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.year}</p>
    </div>
  );
}

export default Film;
