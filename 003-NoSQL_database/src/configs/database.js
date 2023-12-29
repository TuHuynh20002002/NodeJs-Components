const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Connect to MongoDB successfully!!!");
  } catch (error) {
    console.log("Failed");
  }
}

module.exports = { connect };
