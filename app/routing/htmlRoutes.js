var express = require('express');
var path = require('path');

function home(req, res) {    
  console.log('home');
  res.sendFile(path.join(__dirname, 'app/public/home.html'));
}

function survey(req, res) {
  res.sendFile('/survey.html');
}

function htmlRoutes(app) {
  app.use('/', home);
//   app.get('/', home);
  app.get('/survey', survey);
}

module.exports = htmlRoutes;