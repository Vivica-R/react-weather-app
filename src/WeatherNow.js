import React, { useState } from "react";
import "./WeatherNow.css";
import "./WeatherDetails.css";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";



export default function WeatherNow(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      day: "Saturday",
      date: new Date(response.data.dt *1000),
    });
  }

  function search() {
    const apiKey = "68c5c1062569a9e686bff1d72332375f";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }


  function handleSubmit(event){
    event.preventDefault();
    search();

  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherNow">
        <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city..."
              autoFocus="on"
              autoComplete="off"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
    </div>
        <WeatherDetails data={weatherData}/>
        <Forecast city={weatherData.city}/>
      </div>
    );
  } else {
    search();

    return(<h1>Loading...</h1>);
  }
}