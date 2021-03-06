var express = require("express");
var router = express.Router();
var authHelper = require("../helpers/auth");

/* GET home page. */
router.get("/", async function(req, res, next) {
  let parms = {};
  const accessToken = await authHelper.getAccessToken(req.cookies, res);
  const userName = req.cookies.graph_user_name;

  if (accessToken && userName) {
    parms.user = userName;
    parms.cookies = accessToken;
    console.log(`User: ${userName}\nAccess Token: ${accessToken}`);
  } else {
    parms.signInUrl = authHelper.getAuthUrl();
    console.log(`SignInUrl: ${parms.signInUrl}`);
  }

  res.json(parms);
});

module.exports = router;
