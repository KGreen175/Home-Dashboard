const express = require("express");
const router = express.Router();
const authHelper = require("../helpers/auth");

/* GET /authorize. */
router.get("/", async (req, res, next) => {
  // Get auth code
  console.log("AUTHORIZE PAGE HIT");
  console.log("req: ", req.query);
  const code = req.query.code;

  // If code is present, use it
  if (code) {
    try {
      await authHelper.getTokenFromCode(code, res);
      // Redirect to home
      res.redirect("http://localhost:9000/");
    } catch (error) {
      res.json({
        title: "Error",
        message: "Error exchanging code for token",
        error: error
      });
    }
  } else {
    // Otherwise complain
    res.json({
      title: "Error",
      message: "Authorization error",
      error: { status: "Missing code parameter" }
    });
  }
});

/* GET /authorize/signout */
router.get("/signout", function(req, res, next) {
  authHelper.clearCookies(res);

  // Redirect to home
  res.redirect("/");
});

module.exports = router;
