import React from "react";
import PropTypes from "prop-types";

function Card({ data }) {
  return (
    <div id='pe'>
    <input  id='p' type="text" placeholder='search for a country'/>
    <div className="card-container">
      {data.map((country, index) => (
        <div className="card" key={index}>
          <img
            src={country.flags.svg}
            alt={country.name.common}
          />
          <div>
            <div>{country.name.common}</div>
            <div>Population: {country.population}</div>
            <div>Region: {country.region}</div>
            <div>Capital: {country.capital}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Card;
