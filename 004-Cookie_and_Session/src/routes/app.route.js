const express = require("express");
const router = express.Router();

// controller for root route
const AppController = require("../controllers/app.controller");

// controller for error route
const errorController = require("../controllers/error.controller");

// cookie session route
const cookieSessionRouter = require("./cookie-session.route");

// root route
router.get("/about", AppController.about);
router.get("/", AppController.home);

function route(app) {
  app.use("/cookie-session", cookieSessionRouter);
  app.use("/", router);
  app.use(errorController.get404);
}

module.exports = route;
