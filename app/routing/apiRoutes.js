
// --------     these are linking the routes to data sources.


var friendsData = require("../data/friendsData");



module.exports = function(app) {

  // api get requests when users visit a page showing a JSON of the data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


   
};
