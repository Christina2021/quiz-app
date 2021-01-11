// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// For express
const app = express();
let PORT = process.env.PORT || 3000;

// Models for syncing
const db = require("./models");

// Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./routes/api-routes.js")(app);

// Syncing sequelize models then starting Express
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });