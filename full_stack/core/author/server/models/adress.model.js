const mongoose = require('mongoose')

const AdressSchema = new mongoose.Schema({
    city : {
        type : String,
        required :[ true, "{PATH} must be present"],
        minlength : [3, "{path} must be at least 3 chars"],
        trim: true
    },
    code : {
        type : Number,
        required :[ true, "{PATH} must be present"],
        trim: true
    },
}, {timestamps : true});

const Adress = mongoose.model('Adress', AdressSchema);

module.exports = Adress;