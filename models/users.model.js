const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    password: String,
    username: String
});

const user = mongoose.model('Users', userSchema);

module.exports = user;