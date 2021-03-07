import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastPreview.css";

export default function ForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp);

        return temperature;
    }


    return (
        <div className="ForecastPreview">
        <hr />
        <div className="row">
        <div className="col-8">{hours()}</div>
        <div className="col-3" id="icon">
          <WeatherIcon code={props.data.weather[0].icon}/>
        </div>
        <div className="col-1">
          {temperature()}
        <span className="celsiusForecast">°C</span>
        </div>
      </div>
      </div>
    );
}