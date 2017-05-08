var bodyParser = require('body-parser');
var friends = require('../data/friends.js');


function apiRoutes(app){
  
  app.get('/api/friends', friends.getFriends);
  app.post('/api/friends', friends.postFriends);

}

module.exports = apiRoutes;