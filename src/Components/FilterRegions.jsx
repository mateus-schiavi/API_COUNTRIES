import React, { useEffect, useState } from "react";
import axios from "axios";

function FilterRegions() {
  const [data, setData] = useState([]);
  const [continentFilter, setContinentFilter] = useState("");
  const [continentFlags, setContinentFlags] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);

        // Organize the data into continent flags
        const flagsByContinent = {};
        response.data.forEach((country) => {
          if (country.region in flagsByContinent) {
            flagsByContinent[country.region].push(country.flags.svg);
          } else {
            flagsByContinent[country.region] = [country.flags.svg];
          }
        });
        setContinentFlags(flagsByContinent);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleContinentChange = (event) => {
    setContinentFilter(event.target.value);
  };

  return (
    <div>
      <label>
        Filter by Continent:
        <select onChange={handleContinentChange} value={continentFilter}>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>

      {continentFilter === "" ? (
        // Display all continent flags if no filter is applied
        <div>
          {Object.keys(continentFlags).map((continent) => (
            <div key={continent}>
              <h3>{continent}</h3>
              {continentFlags[continent].map((flag, index) => (
                <img
                  key={index}
                  src={flag}
                  alt={`Flag of ${continent}`}
                  style={{ width: "50px", height: "auto" }}
                />
              ))}
            </div>
          ))}
        </div>
      ) : continentFilter in continentFlags ? (
        // Display the flags for the selected continent
        <div>
          <h3>{continentFilter}</h3>
          {continentFlags[continentFilter].map((flag, index) => (
            <img
              key={index}
              src={flag}
              alt={`Flag of ${continentFilter}`}
              style={{ width: "50px", height: "auto" }}
            />
          ))}
        </div>
      ) : (
        <p>No flags available for the selected continent.</p>
      )}
    </div>
  );
}

export default FilterRegions;
