var path = require('path');
var friends = require('friends.js');

function apiRoutes(app){
  app.get('/api/friends', friends.getFriends);
  app.post('/api/friends', friends.postFriends)
}
module.exports = apiRoutes;