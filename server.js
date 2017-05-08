var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');

var app = express();

// Make public folder, jquery, and bootstrap available to front-end
app.use('/public', express.static(path.join(__dirname, 'app/public'))); // redirect public folder
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist'))); // redirect JS jQuery
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))); // redirect JS jQuery
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))); // redirect CSS bootstrap

htmlRoutes(app);
apiRoutes(app);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log('App listening on port', PORT);
})
