// --------     dependencies

var express = require("express");


// -----    setting up the server
var app = express();
var PORT = process.env.PORT || 8080;

// ---------       used for handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// ---------    these routes direct the server to the target;

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// --------     starts the server for listening

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
