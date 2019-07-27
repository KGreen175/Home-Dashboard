import React from "react";
import * as WeatherIconsReact from "weather-icons-react";

const Precipitation = props => {
  const { precipProbability } = props;
  return (
    <div className="rain">
      <WeatherIconsReact.WiRaindrops size={72} color="#92BAD2" />
      <h4>{precipProbability * 100}%</h4>
    </div>
  );
};

export default Precipitation;
