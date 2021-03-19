const mongoose = require('mongoose')

var gameSchema = mongoose.Schema({
    name: String, 
    description: String,
    metacritic_platforms: Array,
    released: String,
    background_image: String,
    website: String,
    playtime: Number,
})

const gameModel = mongoose.model('games', gameSchema)

module.exports = gameModel