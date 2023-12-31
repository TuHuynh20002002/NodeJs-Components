// standard libraries
const path = require("path");

// third-party libraries
const express = require("express"); // Framework
const morgan = require("morgan"); // HTTP logger
const bodyParser = require("body-parser"); // Parse body request
const expressLayouts = require("express-ejs-layouts"); // Template engine

// variables declaration
const app = express();
const route = require("./routes/app.route");
const db = require("./configs/database");
const port = 3000;

// connect to NoSQL database
db.connect();

// HTTP logger
app.use(morgan("combined"));

// Teamplate engine
app.set("view engine", "ejs");
app.use(expressLayouts);

// Setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

//route
route(app);

// run server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
