import React, { useEffect, useState } from "react";
import axios from "axios";

function FilterRegions({ countries, onFilterChange }) {
  const [data, setData] = useState([]);
  const [continentFilter, setContinentFilter] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleContinentChange = (event) => {
    setContinentFilter(event.target.value);
    onFilterChange(event.target.value);
    setSelectedRegion(event.target.value);
  };

  const filteredCountries = data.filter((country) =>
    continentFilter ? country.region === continentFilter : true
  );

  return (
    <div>
      <label>
        Filter by Continent:
        <select onChange={handleContinentChange} value={selectedRegion}>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>

      <ul>
        {filteredCountries.map((country) => (
          <li key={country.cca2}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterRegions;
