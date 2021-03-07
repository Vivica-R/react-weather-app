import React from "react";
import "./App.css";
import WeatherNow from "./WeatherNow";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <WeatherNow defaultCity="Graz" />
          </div>
        </div>
      </div>
    </div>
  );
}