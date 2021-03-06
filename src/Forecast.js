import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <hr />
      <div className="row">
        <div className="col-7">Monday</div>
        <div className="col-2">
          <img src="" alt="" />
        </div>
        <div className="col-2">
          20<span className="celsiusForecast">°C</span>
        </div>
        <div className="col-1">
          15<span className="celsiusForecast">°C</span>
        </div>
      </div>
    </div>
  );
}