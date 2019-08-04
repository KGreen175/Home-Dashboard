import React from "react";
import { WiThermometer } from "weather-icons-react";

const Thermometer = props => {
  const { temperature } = props;
  const red = "DB4437";
  const blue = "4285F4";
  const thermColor = temperature > 75 ? red : blue;
  return (
    <div className="temp">
      <WiThermometer size={72} color={`#${thermColor}`} />
      <div className="temperature">
        <h4>{Math.trunc(temperature)}º</h4>
      </div>
    </div>
  );
};

export default Thermometer;
