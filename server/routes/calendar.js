const express = require("express");
const router = express.Router();
const authHelper = require("../helpers/auth");
const graph = require("@microsoft/microsoft-graph-client");

/* GET /calendar */
router.get("/", async (req, res, next) => {
  let parms = { title: "Calendar", active: { calendar: true } };

  const accessToken = await authHelper.getAccessToken(req.cookies, res);
  const userName = req.cookies.graph_user_name;

  if (accessToken && userName) {
    parms.user = userName;

    // Initialize Graph client
    const client = graph.Client.init({
      authProvider: done => {
        done(null, accessToken);
      }
    });

    // Set start of the calendar view to today at midnight
    const start = new Date(new Date().setHours(0, 0, 0));
    // Set end of the calendar view to 7 days from start
    const end = new Date(new Date(start).setDate(start.getDate() + 7));

    try {
      // Get the first 10 events for the coming week
      const result = await client
        .api(
          `/me/calendarView?startDateTime=${start.toISOString()}&endDateTime=${end.toISOString()}`
        )
        .top(10)
        .select("subject,start,end,attendees")
        .orderby("start/dateTime DESC")
        .get();

      parms.events = result.value;
      res.json(parms);
    } catch (err) {
      parms.message = "Error retrieving events";
      parms.error = { status: `${err.code}: ${err.message}` };
      console.error(JSON.stringify(err.body, null, 2));
      res.json(parms);
    }
  } else {
    // Redirect to home
    res.redirect("/");
  }
});

module.exports = router;
