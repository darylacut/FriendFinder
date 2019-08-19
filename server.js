// --------     dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// -----    setting up the server
var app = express();
var PORT = process.env.PORT || 8080;

// ---------       used for handling data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/app/public')));


// ---------    these routes direct the server to the target;

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// --------     starts the server for listening

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
