
import React from 'react'
import Filter from './Components/Filter'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  const getData = async()=>{
    const res = await fetch (
      "https://restcountries.com/v3.1/all"
    )
    const datos = await res.json()
    setData(datos)

    return datos
  }
    getData()

  return (
    <div>
      <h1>Filtro de Países</h1>
      <Filter/>
    <div>
      {datos.map((pais)=>{
        console.log(pais)
      })}
    </div>
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";
import FilterRegions from "./Components/FilterRegions";
import "./Styles/App.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
        setFilteredCountries(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (selectedRegion) => {
    if (selectedRegion) {
      const filtered = data.filter((country) => country.region === selectedRegion);
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(data);
    }
  };

  return (
    <div className="app-container">
      <FilterRegions countries={data} onFilterChange={handleFilterChange} />
      <div className="card-container">
        {filteredCountries.map((country, index) => (
          <Card
            key={index}
            data={[country]} 
          />
        ))}
      </div>

    </div>
  );
}

export default App;
