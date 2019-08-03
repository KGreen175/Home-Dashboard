import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import * as calendarService from "../services/calendarService";
import "./CalendarContainer.css";

class CalendarContainer extends Component {
  state = {
    user: "",
    events: [],
    isLoading: false
  };

  async componentDidMount() {
    // this.setState({ isLoading: true });
    const calendarData = await calendarService.getCalendarData();
    await this.setState({
      user: calendarData.user,
      events: calendarData.events,
      isLoading: false
    });
    // this.setState({ isLoading: false });
  }

  render() {
    const { user, events, isLoading } = this.state;

    const listEvents = events.map(event => <li>{event.subject}</li>);

    if (isLoading) {
      return <LoadingSpinner />;
    }
    return (
      <div>
        <h3>{user}'s Events Today</h3>
        <ul>{listEvents}</ul>
      </div>
    );
  }
}

export default CalendarContainer;
