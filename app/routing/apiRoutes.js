var bodyParser = require('body-parser');
var friends = require('../data/friends.js');


function apiRoutes(app){
//   app.use(bodyParser());
  
  app.get('/api/friends', friends.getFriends);
  app.post('/api/friends', friends.postFriends);
//   app.post('/api/friends', function(req, res) {
//     console.log(req.body);
//   });
}

module.exports = apiRoutes;