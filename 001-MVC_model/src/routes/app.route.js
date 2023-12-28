const express = require("express");
const router = express.Router();

const AppController = require("../controllers/app.controller");

router.get("/about", AppController.about);
router.get("/", AppController.home);

function route(app) {
  app.use("/", router);
}

module.exports = route;
