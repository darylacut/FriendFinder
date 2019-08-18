
// --------     these are linking the routes to data sources.


var friends = require("../data/friends");



module.exports = function(app) {

  // api get requests when users visit a page showing a JSON of the data
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


// ---------    code for when the server submits data from the form to the API;


  app.post("/api/friends", function(req, res) { 
      friends.push(req.body);
      res.json(true);

  });

   
};
