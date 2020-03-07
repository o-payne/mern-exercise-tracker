const Schema = require('mongoose').Schema
const mongoose = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, 
{
    timestamps: true,
});

const user = mongoose.model('user', userSchema)

module.exports = user;