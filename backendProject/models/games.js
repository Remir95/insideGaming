const mongoose = require('mongoose')

var gameSchema = mongoose.Schema({
    results: String,
    games: String,
    name: String, 
    released: String,
    background_image: String,
    rating: String,
    rating_top: String,
})

const gameModel = mongoose.model('games', gameSchema)

module.exports = gameModel