import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";
import "./Styles/App.css";
import Custom from "./Components/Custom";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <Custom/>
  );
}

export default App;
