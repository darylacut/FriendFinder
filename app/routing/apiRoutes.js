
// --------     these are linking the routes to data sources.


var friends = require("../data/friends");



module.exports = function(app) {

  // api get requests when users visit a page showing a JSON of the data
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


// ---------    code for when the server submits data from the form to the API;


  app.post("/api/friends", function(req, res) { 
      var newFriend = req.body;
      var match = []

// -----    creating a variable array for storing all the differences of all the responses of all friends in the friendsArray, versus the user or "newFriend" entry, the Math.abs is used to get only absolute value differences ;

  var allfriendsDiff = [];
  for ( var x=0 ; x <friendsArray.length ; x++) {
   
      for  ( var i=0 ; i < friendsArray[x].scores.length; i++ ) {
        
          //console.log (Math.abs(newFriend.scores[i] - friendsArray[x].scores[i]));
          allfriendsDiff.push(Math.abs(newFriend.scores[i] - friendsArray[x].scores[i]));
      }
  }


  //  -------    this is a function to split the whole created array into 10 elements each, signifying the 10 differences for each friend vs. the new user;

splitArray(allfriendsDiff);


  function splitArray(allfriendsDiff, chunk_size){
    var eachFriendDiff = [];
    var chunk_size = 10
    
    while (allfriendsDiff.length) {
      
        eachFriendDiff.push(allfriendsDiff.splice(0, chunk_size));
    }
    
sumFriendDiff(eachFriendDiff);
//console.log(eachFriendDiff[0][0]);
//console.log(eachFriendDiff[1]);
    return eachFriendDiff;
    
}


//  ----------    now we get the total difference for each friend and storing them all in an array;

function sumFriendDiff(eachFriendDiff) {
    var allTotalDiffs = [];
    for (var i = 0 ; i < eachFriendDiff.length ; i++) {
      allTotalDiffs.push(eachFriendDiff[i].reduce((a, b) => a + b, 0)) ;
    }
    getMinIndex(allTotalDiffs);
    //console.log(allTotalDiffs);
}


//   ---------     now we get the index number for the smallest difference in the array; this will correspond to the index number of the best match;

function getMinIndex (allTotalDiffs) {
    var arr = allTotalDiffs;
    var minIndex = arr.reduce(function(lowestIndex, element, index, array){
        return element < array[lowestIndex] ? index : lowestIndex;
    }, 0);
    getMatch(minIndex);
    //console.log(minIndex);
}


//  ---------     now we obtain the values of the best match;

function getMatch (minIndex) {

  //console.log("Your best match is:" + friendsArray[minIndex].name);
   match.push(friendsArray[minIndex].name);
    match.push(friendsArray[minIndex].photo);
}


    
    friendsArray.push(newFriend);
      res.json(friendsArray[minIndex]);

  });

};
