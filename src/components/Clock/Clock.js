import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { date } = this.state;
    let hours = date.getHours();
    let greeting = "Day!";

    if (hours < 12) {
      greeting = "Morning!";
    } else if (hours > 11 && hours < 19) {
      greeting = "Afternoon!";
    } else {
      greeting = "Night!";
    }

    return (
      <div>
        <h1>Good {greeting}</h1>
        <h2>{date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
