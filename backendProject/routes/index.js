var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// var request = require('sync-request')

// var movieModel = require('../models/movies')

// var myApiKey = "56825f110e0e472db82bb897ebdfdda2"

// router.get('/new-movies', function(req, res, next) {
//   var data = request('GET',`https://api.themoviedb.org/3/discover/movie?api_key=${myApiKey}&language=FR&region=FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2020-11-01&release_date.lte=2020-11-30`)
//   var dataParse = JSON.parse(data.body)
  
//   res.json({result: true, movies:dataParse.results})
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
