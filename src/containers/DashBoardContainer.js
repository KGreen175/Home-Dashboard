import React, { Component } from "react";
import CalendarContainer from "./CalendarContainer";
import WeatherContainer from "./WeatherContainer";
import "./DashBoardContainer.css";

class DashBoardContainer extends Component {
  render() {
    return (
      <div className="DashBoardContainer">
        <WeatherContainer className="WeatherContainer" />
        <CalendarContainer className="CalendarContainer" />
      </div>
    );
  }
}

export default DashBoardContainer;
