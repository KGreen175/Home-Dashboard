import React from "react";
import WeatherContainer from "./containers/WeatherContainer";
import CalendarContainer from "./containers/CalendarContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherContainer />
        <CalendarContainer />
      </header>
    </div>
  );
}

export default App;
