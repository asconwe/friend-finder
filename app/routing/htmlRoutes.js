var express = require('express');
var path = require('path');

function home(req, res) {    
  res.sendFile(path.join(__dirname, '../public/home.html'));
}

function survey(req, res) {
  res.sendFile(path.join(__dirname, '../public/survey.html'));
}

function htmlRoutes(app) {
  // Make public folder, jquery, and bootstrap available to front-end
  app.use('/public', express.static(path.join(__dirname, '../public'))); // Public folder
  app.use('/js', express.static(path.join(__dirname, '../../node_modules/jquery/dist'))); // JS jQuery
  app.use('/js', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/js'))); // JS bootstrap
  app.use('/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css'))); // CSS bootstrap
  // Listen for requests on '/' ans '/survery'
  app.get('/', home);
  app.get('/survey', survey);
}

module.exports = htmlRoutes;