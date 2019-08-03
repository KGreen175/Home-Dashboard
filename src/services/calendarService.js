import axios from "axios";

let allCalendarResponse = {};

export const getCalendarData = async () => {
  try {
    allCalendarResponse = await axios.get("/calendar");
  } catch (error) {
    console.error(`Exception while getting calendar data: ${error}`);
    return allCalendarResponse;
  }
  return allCalendarResponse.data;
};
