import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div>
      <div>{props.imagen}</div>
      <div>
        <div>{props.nombre}</div>
        <div>{props.pou}</div>
        <div>{props.region}</div>
        <div>{props.capital}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  pou: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

export default Card;
