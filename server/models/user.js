const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 100,
        unique: true,
        validate: {
            // validator: (value) => {
            //     return validator.isEmail(value);
            // },
            validator: validator.isEmail,
            message: '{value} is not valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]

});

module.exports = {User};