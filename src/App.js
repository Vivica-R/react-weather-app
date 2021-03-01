import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <header className="App-header">
      </header>
      <footer>This project was coded by <a href="https://www.linkedin.com/in/vivica-ramdawon" target="_blank">Vivica Ramdawon</a> and is <a href="https://github.com/Vivica-R/react-weather-app" target="_blank">open-sourced on GitHub</a></footer>
    </div>
    </div>
  );
}

