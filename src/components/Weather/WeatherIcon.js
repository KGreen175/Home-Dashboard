import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const WeatherIcon = props => {
  const { icon } = props;
  const color = "goldenrod";
  const size = 100;
  const animate = true;
  return (
    <div>
      <ReactAnimatedWeather
        icon={icon}
        color={color}
        size={size}
        animate={animate}
      />
    </div>
  );
};

export default WeatherIcon;
