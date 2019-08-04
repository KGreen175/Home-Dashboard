import React, { Component } from "react";
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
    this.setState({ isLoading: true });
    const calendarData = await calendarService.getCalendarData();
    await this.setState({
      user: calendarData.user,
      events: calendarData.events.reverse(),
      isLoading: false
    });
    this.setState({ isLoading: false });
  }

  render() {
    const { events, isLoading } = this.state;
    const listEvents = events.map(event => (
      <div className="Event shadow-nohover" key={event.id}>
        <h6>{event.subject}</h6>
        <li>{event.start.dateTime}</li>
      </div>
    ));

    if (isLoading) {
      return <LoadingSpinner />;
    }
    return (
      <div className="card-body text-center">
        <h5>This Week's Agenda</h5>
        <ul>{listEvents}</ul>
      </div>
    );
  }
}

export default CalendarContainer;
