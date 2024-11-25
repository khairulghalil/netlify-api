const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const templateRouter = require("./template/template.router");

app.use(express.json());

const apiRoutes = [
  {
    path: "/template",
    route: templateRouter,
  },
];

apiRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

app.use((req, res, next) => {
  const originalJson = res.json;
  res.json = (body) => {
    return originalJson.call(res, { data: body });
  };
  next();
});

app.get("/.netlify/functions/api", (req, res) => {
  res.send("App is running ...");
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
