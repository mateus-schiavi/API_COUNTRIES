import React from "react";
import Card from "./Components/Card";
import Custom from "./Components/Custom";
import "./Styles/App.css";

function App() {
  const data = Custom();

  return (
    <div className="app-container">
      <Card data={data} />
    </div>
  );
}

export default App;
