require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./src/config/db");
const cors = require("cors");
const CostRouter = require('./src/routes/costRoutes');
// Initiate Mongo Server
InitiateMongoServer();
const app = express();
// PORT
// const PORT = process.env.PORT || 4000;
// Middleware
app.use(bodyParser.json());
app.use(cors());
//cors
app.use('/', CostRouter);
app.get("/", (req, res) => {
  res.json({ message: "API Working Yes  It's Working man"});
});
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server Started at PORT ${process.env.PORT}`);
});