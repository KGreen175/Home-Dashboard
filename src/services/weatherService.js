import axios from "axios";

let allWeatherResponse = {};

export const getWeatherData = async () => {
  try {
    allWeatherResponse = await axios.get("/weather");
  } catch (err) {
    console.error(`Exception while getting weather data: ${err}`);
    return allWeatherResponse;
  }
  return allWeatherResponse;
};

const determineWeatherIcon = weatherIcon => {
  const icon = weatherIcon
    .split("-")
    .join("_")
    .toUpperCase();
  return icon;
};

export const getCurrentWeather = async () => {
  const weatherResponse = await getWeatherData();
  let { currently } = weatherResponse.data;
  currently.icon = determineWeatherIcon(currently.icon);
  return currently;
};
