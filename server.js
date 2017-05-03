var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');

var app = express();

htmlRoutes(app);
apiRoutes(app);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log('App listening on port', PORT);
})
