import React, { useEffect, useState } from "react"; // Import useState
import axios from "axios"; // Import axios
import FilterRegions from "./Components/FilterRegions";
import Card from "./Components/Card";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
   
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <FilterRegions />

      {countries.map((country, index) => (
        <Card
          key={index}
          imagen={<img src={country.flags.svg} alt={country.name.common} />}
          nombre={country.name.common}
          pou={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </div>
  );
}

export default App;
