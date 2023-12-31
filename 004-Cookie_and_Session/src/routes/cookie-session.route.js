const express = require("express");
const router = express.Router();

const CookieSessionController = require("../controllers/cookie-session.controller");

router.post("/create", CookieSessionController.postCreate);
router.post("/destroy", CookieSessionController.postDestroy);
router.get("/", CookieSessionController.getPage);

module.exports = router;
