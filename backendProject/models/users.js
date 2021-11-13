const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    pseudo: String,
    email: String,
    password: String,
    token: String,
    salt: String,
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel