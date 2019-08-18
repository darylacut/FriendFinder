//   ---------    holds all of the friends and their properties;

var friendsArray = [
    {
        name: "Ahmed",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores :[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
      ]
    },
    {
      name: "Abdi",
      photo: "",
      scores : [
        4,2,5,1,2,3,4,2,3,1
      ]
    }
  ];


var newFriend = {
  name: "this Friend",
  photo: "thisphoto.jpg",
  scores: [
    3,4,5,2,2,3,4,2,1,4
  ]
}


// friendsArray.forEach(function (scores) {
//   console.log(
//     [scores].reduce((a, b) => a + b, 0)
//   )
//   //console.log(scores);
// });




var allfriendsDiff = [];
  for ( var x=0 ; x <friendsArray.length ; x++) {
   
      for  ( var i=0 ; i < friendsArray[x].scores.length; i++ ) {
        
          //console.log (Math.abs(newFriend.scores[i] - friendsArray[x].scores[i]));
          allfriendsDiff.push(Math.abs(newFriend.scores[i] - friendsArray[x].scores[i]));
      }
  }


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


function sumFriendDiff(eachFriendDiff) {
    var allTotalDiffs = [];
    for (var i = 0 ; i < eachFriendDiff.length ; i++) {
      allTotalDiffs.push(eachFriendDiff[i].reduce((a, b) => a + b, 0)) ;
    }
    getMinIndex(allTotalDiffs);
    //console.log(allTotalDiffs);
}


function getMinIndex (allTotalDiffs) {
    var arr = allTotalDiffs;
    var minIndex = arr.reduce(function(lowestIndex, element, index, array){
        return element < array[lowestIndex] ? index : lowestIndex;
    }, 0);
    getMatch(minIndex);
    //console.log(minIndex);
}


function getMatch (minIndex) {
  console.log("Your best match is:" + friendsArray[minIndex].name);
}
  

// -----------    exports the array
  module.exports = friendsArray;