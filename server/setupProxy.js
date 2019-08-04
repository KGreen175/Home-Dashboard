const proxy = require("http-proxy-middleware");

module.exports = server => {
  server.use(proxy("/*", { target: "http://localhost:9000/" }));
};
