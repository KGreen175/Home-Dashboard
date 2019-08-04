import React, { Component } from "react";
import Clock from "../components/Clock/Clock";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import Precipitation from "../components/Weather/Precipitation";
import Thermometer from "../components/Weather/Thermometer";
import WeatherIcon from "../components/Weather/WeatherIcon";
import * as weatherService from "../services/weatherService";

import "./WeatherContainer.css";

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: {},
      icon: "PARTLY_CLOUDY_DAY",
      isLoading: false
    };
  }

  loadCurrentWeatherSummary = async () => {
    const currentWeatherSummary = await weatherService.getCurrentWeather();
    await this.setState({
      currentWeather: currentWeatherSummary,
      icon: currentWeatherSummary.icon
    });
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    await this.loadCurrentWeatherSummary();
    this.setState({ isLoading: false });
    try {
      setInterval(async () => {
        await this.loadCurrentWeatherSummary();
      }, 120000);
    } catch (err) {
      console.error(err);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentWeather, icon, isLoading } = this.state;
    const { summary, temperature, precipProbability } = currentWeather;

    if (isLoading) {
      return <LoadingSpinner />;
    }

    return (
      <div className="card-body text-center">
        <Clock />
        <p>{summary}</p>
        <WeatherIcon icon={icon} />
        <div className="TempRain">
          <Thermometer className="Thermometer" temperature={temperature} />
          <Precipitation
            className="Precipitation"
            precipProbability={precipProbability}
          />
        </div>
      </div>
    );
  }
}

export default WeatherContainer;
