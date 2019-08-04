import React from "react";
import { WiThermometer } from "weather-icons-react";

const Thermometer = props => {
  const { temperature } = props;
  const red = "dd4b39";
  const blue = "53789E";
  const thermColor = temperature > 75 ? red : blue;
  return (
    <div className="temp">
      <WiThermometer size={48} color={`#${thermColor}`} />
      <div className="temperature">
        <h4>{Math.trunc(temperature)}º</h4>
      </div>
    </div>
  );
};

export default Thermometer;
