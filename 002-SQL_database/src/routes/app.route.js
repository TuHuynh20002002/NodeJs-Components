const express = require("express");
const router = express.Router();

// controller for root route
const AppController = require("../controllers/app.controller");

// user route
const userRouter = require("./user.route");

// root route
router.get("/about", AppController.about);
router.get("/", AppController.home);

function route(app) {
  app.use("/users", userRouter);
  app.use("/", router);
}

module.exports = route;
