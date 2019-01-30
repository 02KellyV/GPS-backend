const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapSchema = new Schema({
    date: Date,
    lat: Number,
    lng: String
});

const map = mongoose.model('Maps', mapSchema);

module.exports = map;