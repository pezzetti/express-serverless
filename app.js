const serverless = require("serverless-http");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Health check endpoint from / route");
  res.send({ application: "sample-app", version: "1.0" });
});
app.post("/api/getback", (req, res) => {
  console.log("POST GETBack endpoint");
  res.send({ ...req.body });
});
// app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);
