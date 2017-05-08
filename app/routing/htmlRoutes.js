var express = require('express');
var path = require('path');

function home(req, res) {    
  console.log('home');
  res.sendFile(path.join(__dirname, '../public/home.html'));
}

function survey(req, res) {
  console.log('ab');
  res.sendFile(path.join(__dirname, '../public/survey.html'));
}

function htmlRoutes(app) {
  app.get('/', home);
  app.get('/survey', survey);
}

module.exports = htmlRoutes;