const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model('user', UserSchema, 'Users' );
