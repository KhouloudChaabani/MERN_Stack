const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name : {
        type : String,
        required :[ true, "{PATH} must be present"],
        minlength : [3, "{path} must be at least 3 chars"],
        trim: true
    },
    book : {
        type : String,
        required :[ true, "{PATH} must be present"],
        trim: true
    },
    isDead : {
        type : Boolean,
        required :[ true, "{PATH} must be present"],
        default: false
    }
    

}, {timestamps : true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;