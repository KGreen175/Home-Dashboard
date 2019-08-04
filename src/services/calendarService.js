import axios from "axios";
import moment from "moment";
let allCalendarResponse = {};

export const getCalendarData = async () => {
  try {
    allCalendarResponse = await axios.get("/calendar");
  } catch (error) {
    console.error(`Exception while getting calendar data: ${error}`);
    return allCalendarResponse;
  }
  await convertDateTimeMoment(allCalendarResponse.data.events);
  return allCalendarResponse.data;
};

const convertDateTimeMoment = async dateTime => {
  let convertedDateTime = [...dateTime];
  for (let i = 0; i < convertedDateTime.length; i++) {
    convertedDateTime[i].start.dateTime = moment(
      convertedDateTime[i].start.dateTime
    ).format("dddd MMM-DD-YYYY hh:mm A");
  }
  console.log("inside:", convertedDateTime);
};
