import FilterRegions from "./Components/FilterRegions";
import "./App.css";
import React from "react";
import Card from "./Components/Card";
Card;

function App() {
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);
  return (
    <>
      <FilterRegions />

      <Card
        imagen={<img src={data.flags} alt="Example" />}
        nombre="Card Name"
        pou="Some Value"
        region="Some Region"
        capital="Capital City"
      />
    </>
  );
}

export default App;
