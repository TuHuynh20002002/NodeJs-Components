const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: {
      type: String,
      maxLength: 100,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
