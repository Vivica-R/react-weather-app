import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails() {
  return (
    <div className="WeatherDetails">
      <div className="details">
        <div className="row">
          <div className="col-4">DESCRIPTION</div>
          <div className="col-4">HUMIDITY</div>
          <div className="col-4">WIND</div>
        </div>
        <div className="row">
          <div className="col-4 description"></div>
          <div className="col-4">
            <span></span> %
          </div>
          <div className="col-4">
            <span></span> km/h
          </div>
        </div>
      </div>
    </div>
  );
}