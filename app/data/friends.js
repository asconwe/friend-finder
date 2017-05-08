var friends = {
  postFriends: postFriends,
  getFriends: getFriends,
  friendsList: [{
    friendName: 'August Conwell',
    imageUrl: 'https://github.com/asconwe/bootstrap-portfolio/blob/master/assets/images/profile.jpg?raw=true',
    scores: [1, 1, 1, 1, 1, 1, 1, 1, 1]
  }, {
    friendName: 'Joe B.',
    imageUrl: 'http://visionsportsllc.com/wp-content/uploads/2014/06/joe-benniati.jpg',
    scores: [5, 5, 5, 5, 5, 5, 5, 5, 5]
  }]
}

function returnBestFriend(res, bestFriend) {
  res.json(bestFriend);
}

function addToFriends(newFriend) {
  return friends.friendsList.push(newFriend);
}

function postFriends(req, res) {
  var bestFriend = {index: 0, score: 50}
  var newFriend = req.body;

  friends.friendsList.forEach(function (friendObj, index) {
    var friendScore = 0;
    friendObj.scores.forEach(function (number, index){
      friendScore += Math.abs(number - newFriend.scores[index])
    })
    if (friendScore < bestFriend.score) {
      bestFriend.index = index;
      bestFriend.score = friendScore;
    }
  });
  returnBestFriend(res, friends.friendsList[bestFriend.index]);
  addToFriends(newFriend);
}

function getFriends(req, res) {
  res.json(friends);
}

module.exports = friends;