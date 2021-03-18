var express = require('express');
var router = express.Router();

var uid2 = require('uid2')
var SHA256 = require('crypto-js/sha256')
var encBase64 = require('crypto-js/enc-base64')

var userModel = require('../models/users')


//===================== SIGN UP ============================//
router.post('/sign-up', async function (req, res, next) {

  var error = []
  var result = false
  var saveUser = null
  var token = null

  const data = await userModel.findOne({
    email: req.body.emailFromFront
  })

  if (data != null) {
    error.push('utilisateur déjà présent')
  }

  if (req.body.usernameFromFront == ''
    || req.body.emailFromFront == ''
    || req.body.passwordFromFront == ''
  ) {
    error.push('champs vides')
  }

  if (error.length == 0) {

    var salt = uid2(32)
    var newUser = new userModel({
      username: req.body.usernameFromFront,
      email: req.body.emailFromFront,
      password: SHA256(req.body.passwordFromFront + salt).toString(encBase64),
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

  if (req.body.emailFromFront == ''
    || req.body.passwordFromFront == ''
  ) {
    error.push('champs vides')
  }

  if (error.length == 0) {
    const user = await userModel.findOne({
      email: req.body.emailFromFront,
    })


    if (user) {
      const passwordEncrypt = SHA256(req.body.passwordFromFront + user.salt).toString(encBase64)

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

// var request = require('sync-request')

// var movieModel = require('../models/movies')

// var myApiKey = "56825f110e0e472db82bb897ebdfdda2"

// router.get('/new-movies', function(req, res, next) {
//   var data = request('GET',`https://api.themoviedb.org/3/discover/movie?api_key=${myApiKey}&language=FR&region=FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2020-11-01&release_date.lte=2020-11-30`)
//   var dataParse = JSON.parse(data.body)

//   res.json({result: true, movies:dataParse.results})
// });


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('');
});

module.exports = router;
