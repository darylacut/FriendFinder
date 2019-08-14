
// ------------         dependencies

var path = require("path");


 // ----------      creating html get requests to specific paths that the user can visit
module.exports = function(app) {

//  path to the survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
