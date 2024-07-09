var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: Number
    }
});

module.exports = mongoose.model('User', userSchema);