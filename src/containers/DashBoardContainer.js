import React, { Component } from "react";
import CalendarContainer from "./CalendarContainer";
import WeatherContainer from "./WeatherContainer";
import "./DashBoardContainer.css";

class DashBoardContainer extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div>
            <WeatherContainer />
          </div>
        </div>
        <div className="col">
          <div>
            <CalendarContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoardContainer;
