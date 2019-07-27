const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/", async (request, response) => {
  const latlonHome = [33.768, -84.338];
  const lat = latlonHome[0];
  const lon = latlonHome[1];
  const api_key = process.env.API_KEY;
  const weather_url = `https://api.darksky.net/forecast/${api_key}/${lat},${lon}/?exclude=minutely`;
  try {
    const weatherRes = await axios.get(weather_url);
    response.json(weatherRes.data);
  } catch (err) {
    console.error(`Error getting weather data from api ${err}`);
  }
});

module.exports = router;
