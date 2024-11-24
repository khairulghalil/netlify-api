const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const { db } = require("../config/firebase-admin");

app.use(express.json());

router.post("/add", async (req, res) => {
  const data = req.body;
  const users = db.collection("users").doc();
  await users.set({ data });
  res.status(200).send({ id: users.id });
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
