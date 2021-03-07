import React, {useState} from "react";

export default function WeatherTemperature(props){
  const [unit, setUnit] = useState("celsius"); 
  
  function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit")
  }
  
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }  
  
  function fahrenheit() {
    return(
      Math.round((props.celsius * 9) / 5 + 32)
    );
  }

  if (unit === "celsius") {
  return(
        <div className="WeatherTemperature">
            <p className="text-center" id="temperature-field">
              <span id="temperature">{props.celsius}</span>
            </p>
            <p className="text-center" id="units">
              <span>
                  °C | <a href="#" onClick={showFahrenheit}>°F</a>
              </span>
            </p>
        </div>
    );
  } else {
    return(
      <div className="WeatherTemperature">
          <p className="text-center" id="temperature-field">
            <span id="temperature">{fahrenheit()}</span>
          </p>
          <p className="text-center" id="units">
            <span>
            <a href="#" onClick={showCelsius}>°C</a> | °F
            </span>
          </p>
      </div>
  );
  }
}