var express = require('express');
var router = express.Router();

var uid2 = require('uid2')
var SHA256 = require('crypto-js/sha256')
var encBase64 = require('crypto-js/enc-base64')
var axios = require("axios").default;

var userModel = require('../models/users')
var gameModel = require('../models/games')

var myApiKey = "7afcf24d0dmshb0b2e9e30e5755dp103543jsnf8ac4dc1560d" 

//===================== API GAME ============================//

router.get('/game', function (req, res, next) {

  var options = {
    method: 'GET',
    url: 'https://rawg-video-games-database.p.rapidapi.com/genres',
    headers: {
      'x-rapidapi-key': '7afcf24d0dmshb0b2e9e30e5755dp103543jsnf8ac4dc1560d',
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
    }
  };

  axios.request(options).then(async function (response) {

    var results = response.data.results;
    var gamesList = []

    for (var a = 0; a < results.length; a++) {
      var games = results[a].games

      for (var b = 0; b < games.length; b++) {
        if(gamesList.indexOf(games[b].id) ===-1){
          gamesList.push(games[b].id)

        }
      }
    }
    console.log(gamesList)

    for (let game of gamesList){
      var optionsBis = {
        method: 'GET',
        url: `https://rawg-video-games-database.p.rapidapi.com/games/${game}`,
        headers: {
          'x-rapidapi-key': '7afcf24d0dmshb0b2e9e30e5755dp103543jsnf8ac4dc1560d',
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
        }
      };
      axios.request(optionsBis).then(async function (responseBis) {

        var platform = []
        var dataGame = responseBis.data

        if (dataGame !== undefined){

          for (var d = 0; d < dataGame.metacritic_platforms.length; d++) {
            platform.push(dataGame.metacritic_platforms[d].platform.name)
          }
        }

        var TotalGamesList = new gameModel({

          name: dataGame.name,
          description: dataGame.description,
          metacritic_platforms: platform,
          released: dataGame.released,
          background_image: dataGame.background_image,
          website: dataGame.website,
          playtime: dataGame.playtime,

        });

        await TotalGamesList.save();

      }).catch(function (errorBis) {
        console.error(errorBis);
      });
    }

    // for (var c = 0; c < gamesList.length; c++) {

    //   var optionsBis = {
    //     method: 'GET',
    //     url: `https://rawg-video-games-database.p.rapidapi.com/games/${gamesList[c]}`,
    //     headers: {
    //       'x-rapidapi-key': '7afcf24d0dmshb0b2e9e30e5755dp103543jsnf8ac4dc1560d',
    //       'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
    //     }
    //   };

    //   axios.request(optionsBis).then(async function (responseBis) {

    //     var platform = []
    //     var dataGame = responseBis.data

    //     if (dataGame !== undefined){

    //       for (var d = 0; d < dataGame.metacritic_platforms.length; d++) {
    //         platform.push(dataGame.metacritic_platforms[d].platform.name)
    //       }
    //     }

    //     var TotalGamesList = new gameModel({

    //       name: dataGame.name,
    //       description: dataGame.description,
    //       metacritic_platforms: platform,
    //       released: dataGame.released,
    //       background_image: dataGame.background_image,
    //       website: dataGame.website,
    //       playtime: dataGame.playtime,

    //     });

    //     await TotalGamesList.save();

    //   }).catch(function (errorBis) {
    //     console.error(errorBis);
    //   });
    // }

  }).catch(function (error) {
    console.error('ERROR', error);
  });
  res.json('great')
});

//===================== LIST BDD GAMES ============================//
router.get('/list-game',async function (req, res, next) {
  var result = await gameModel.find();
  res.json(result)
});

//===================== LIST USERS ============================//
router.get('/user',async function (req, res, next) {
  var user = await userModel.find();
  res.json(user)
});

//===================== SIGN UP ============================//
router.post('/sign-up', async function (req, res, next) {

  var error = []
  var result = false
  var saveUser = null
  var token = null

  const data = await userModel.findOne({
    email: req.body.email
  })

  if (data != null) {
    error.push('utilisateur déjà présent')
  }

  if (req.body.username == ''
    || req.body.email == ''
    || req.body.password == ''
  ) {
    error.push('champs vides')
  }

  if (error.length == 0) {

    var salt = uid2(32)
    var newUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: SHA256(req.body.password + salt).toString(encBase64),
      token: uid2(32),
      salt: salt,
    })

    saveUser = await newUser.save()


    if (saveUser) {
      result = true
      token = saveUser.token
    }
  }
  res.json({ result, saveUser, error, token })
})

//===================== SIGN IN ============================//
router.post('/sign-in', async function (req, res, next) {

  var result = false
  var user = null
  var error = []
  var token = null

  if (req.body.email == ''
    || req.body.password == ''
  ) {
    error.push('champs vides')
  }

  if (error.length == 0) {
    const user = await userModel.findOne({
      email: req.body.email,
    })


    if (user) {
      const passwordEncrypt = SHA256(req.body.password + user.salt).toString(encBase64)

      if (passwordEncrypt == user.password) {
        result = true
        token = user.token
      } else {
        result = false
        error.push('mot de passe incorrect')
      }

    } else {
      error.push('email incorrect')
    }
  }
  res.json({ result, user, error, token })
})

//===================== INFO USERS ============================//

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('');
});

router.get('/user', function (req, res, next) {
  
  res.render('');
});

module.exports = router;
