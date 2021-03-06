import React from "react";
import "./ForecastTitles.css";

export default function ForecastTitles() {
  return (
    <div className="ForecastTitles">
      <div className="row">
        <div className="col-7"></div>
        <div className="col-2"></div>
        <div className="col-2">Max</div>
        <div className="col-1">Min</div>
      </div>
    </div>
  );
}