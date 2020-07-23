import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { pieChartData } from "./Data";
import PieChart from "./Components/PieChart";

function App() {
  return (
    <div className="App">
      <PieChart pieChartData={pieChartData} />
    </div>
  );
}

export default App;
