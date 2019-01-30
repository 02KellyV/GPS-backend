const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://KellyVilla:Cifhi381@cluster0-buwts.mongodb.net/test?retryWrites=true', function (err) {

    if (err) throw err;

    console.log('Successfully connected');

});

module.exports = mongoose.connection;