import React from "react";
import PropTypes from "prop-types";

function Card({ data }) {
  return (
    <div id='pe'>
    <input  id='p' type="text" placeholder='search for a country'/>
    <div className="card-container">
      {data.map((country, index) => (
        <div className="card" key={index}>
          <div className="imagen">
            <img src={country.flags.svg} alt={country.name.common} />
          </div>
          <div>
            <div>
              <h2>
                <strong>{country.name.common}</strong>
              </h2>
            </div>
            <div>
              <strong>Population:</strong>
              {country.population}
            </div>
            <div>
              <strong>Region:</strong> {country.region}
            </div>
            <div>
              <strong>Capital:</strong>
              {country.capital}
            </div>
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
