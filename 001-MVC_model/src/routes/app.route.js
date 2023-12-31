const express = require("express");
const router = express.Router();

// controller for root route
const AppController = require("../controllers/app.controller");

// root route
router.get("/about", AppController.about);
router.get("/", AppController.home);

function route(app) {
  app.use("/", router);
  app.use(errorController.get404);
}

module.exports = route;
