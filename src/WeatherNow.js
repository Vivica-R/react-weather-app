import React, { useState } from "react";
import "./WeatherNow.css";
import axios from "axios";

export default function WeatherNow(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
      day: "Saturday",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherNow">
        <h1>{weatherData.city}</h1>
        <p id="today">
          <span id="day">{weatherData.day}</span>, <span id="time">14:00</span>
        </p>
        <div className="row" id="now">
          <div className="col-1"></div>
          <div className="col-4">
            <img src={weatherData.iconUrl} alt={weatherData.description} id="weather-icon" className="center-block" />
          </div>
          <div className="col-4">
            <p className="text-center" id="temperature-field">
              <span id="temperature">{weatherData.temperature}</span>
            </p>
          </div>
          <div className="col-2">
            <p className="text-center" id="units">
              <span>
                <a href="#" id="celsius-link" className="active">
                  °C&nbsp;
                </a>
              </span>
               |&nbsp; 
              <span>
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </p>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="details">
        <div className="row">
          <div className="col-4">DESCRIPTION</div>
          <div className="col-4">HUMIDITY</div>
          <div className="col-4">WIND</div>
        </div>
        <div className="row">
          <div className="col-4 description">{weatherData.description}</div>
          <div className="col-4">
            <span>{weatherData.humidity}</span> %
          </div>
          <div className="col-4">
            <span>{weatherData.wind}</span> km/h
          </div>
        </div>
      </div>
      </div>
    );
  } else {
    const apiKey = "68c5c1062569a9e686bff1d72332375f";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return("Loading...");
  }
}