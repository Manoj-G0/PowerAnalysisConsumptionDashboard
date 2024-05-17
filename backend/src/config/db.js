//FILENAME : db.js
require("dotenv").config
const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = process.env.MONGO_URI;

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;

