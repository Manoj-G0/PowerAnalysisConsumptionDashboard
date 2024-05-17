const express = require("express");
const Cost = require("../controllers/CostController")
const Router = express.Router();


Router.post("/cost-entry", Cost.addCost);
Router.get("/get-data",Cost.costGet);
Router.delete("/delete-data/:id",Cost.deleteCost);
Router.put("/update-data/:id",Cost.updateCost);

module.exports = Router; 
    