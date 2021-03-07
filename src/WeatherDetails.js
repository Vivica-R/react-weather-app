import React from "react";
import "./WeatherDetails.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherDetails(props) {
  return(
    <div className="WeatherDetails">
         <h1>{props.data.city}</h1>
        <FormattedDate date={props.data.date}/>
        <div className="row" id="now">
          <div className="col-1"></div>
          <div className="col-4">
            <div className="center-block">
            <WeatherIcon code={props.data.icon}/>
            </div>
          </div>
          <div className="col-6 "><WeatherTemperature celsius={props.data.temperature}/></div>
          <div className="col-1"></div>
        </div>
        <div className="details">
        <div className="row">
          <div className="col-4">DESCRIPTION</div>
          <div className="col-4">HUMIDITY</div>
          <div className="col-4">WIND</div>
        </div>
        <div className="row">
          <div className="col-4 description">{props.data.description}</div>
          <div className="col-4">
            <span>{props.data.humidity}</span> %
          </div>
          <div className="col-4">
            <span>{props.data.wind}</span> km/h
          </div>
        </div>
      </div>
    </div>
  )
}