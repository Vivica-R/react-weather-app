import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastPreview from "./ForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name){
  console.log(forecast);
  console.log(props.city);
  return (
    <div className="Forecast">
      <ForecastPreview data={forecast.list[0]}/>
      <ForecastPreview data={forecast.list[1]}/>
      <ForecastPreview data={forecast.list[2]}/>
      <ForecastPreview data={forecast.list[3]}/>
      <ForecastPreview data={forecast.list[4]}/>
      
    </div>
  );
  } else {
    let apiKey = "68c5c1062569a9e686bff1d72332375f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}