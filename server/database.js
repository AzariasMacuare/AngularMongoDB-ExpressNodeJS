const mongoose = require('mongoose');

const URI = 'mongodb://localhost/meanCrud';

mongoose.connect(URI)
    .then(db => console.log('DB is Connect'))
    .catch(err => console.error(err))

module.exports = mongoose;