import React, { useState, useEffect } from 'react';

function FilterRegions() {
  const [regions, setRegions] = useState([]); 
  const [selectedRegion, setSelectedRegion] = useState(''); 
  const [filteredCountries, setFilteredCountries] = useState([]); 
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setData(data); 
        const uniqueRegions = [...new Set(data.map((country) => country.region))].filter(region => region && region !== "text");
        setRegions(uniqueRegions);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      const filteredCountries = data.filter((country) => country.region === selectedRegion);
      setFilteredCountries(filteredCountries);
    } else {
      setFilteredCountries(data);
    }
  }, [selectedRegion]);

  return (
    <div className="filter-container container mt-4">
      <h2 className="mb-4"></h2>
      <div className="row">
        <div className="col-md-4">
          <select
            className="form-select"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="">Filter by Region</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ul className="mt-4">
        {filteredCountries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterRegions;