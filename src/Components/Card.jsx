import React from "react";

function Card(props) {
  return (
    <div>
      <div>{props.imagen}</div>
      <div>
        <div>{props.nombre}</div>
        <div>{props.pou} </div>
        <div>{props.region} </div>
        <div>{props.capital} </div>
      </div>
    </div>
  );
}

export default Card;
