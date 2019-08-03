import axios from "axios";

let loginUrl = "No Login Url";
export const getOutLookLoginUrl = async () => {
  try {
    loginUrl = await axios.get("/");
  } catch (error) {
    console.error(`Exception while getting login url: ${error}`);
    return loginUrl;
  }
  console.log("loginUrl", loginUrl);
  return loginUrl;
};
