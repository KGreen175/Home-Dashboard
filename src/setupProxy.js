import proxy from "http-proxy-middleware";

export default function(app) {
  app.use(proxy("/", { target: "http://localhost:9000" }));
}
