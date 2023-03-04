import React from "react";

function Film(props) {
  return (
    <div className="film">
      <img src={props.poster} alt={props.title} />
      <p>{props.year}</p>
    </div>
  );
}

export default Film;
