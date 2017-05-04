var friends = {
  postFriends: postFriends,
  getFriends: getFriends,
  friendsList: [];
}

function showBestFriend(res, bestFriend) {
  res.json(bestFriend);
}

function addToFriends(newFriend) {
  return friends.friendsList.push(newFriend);
}

function postFriends(req, res) {
  var bestFriend = {index: 0, score: 50}
  var newFriend = req.body;
  friends.forEach(function (FriendObj, index) {
    var friendScore = 0;
    friendObject.scores.forEach(function (number, index){
      friendScore += Math.abs(number - newFriend.score[index])
    })
    if (friendScore < bestFriend.score) {
      bestFriend.index = index;
      bestFriend.score = friendScore;
    }
  });
  showBestFriend(res, friends.friendsList[bestFriend.index]);
  addToFriends(newFriend);
}

function getFriends(req, res) {
  res.json(friends);
}

module.exports = friends;