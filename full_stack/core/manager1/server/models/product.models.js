// import mongoose to build model
const mongoose = require("mongoose");

// the model - the rules the everyone need to follow
const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength:[5, "{PATH} must be at least 5 chars"]

    },
    price: {
        type: Number,
        required: [true, "{PATH} is required"],
        min:[4, "{PATH} must be at least 4 numbers"]
    },
    description:{
        type: String,
        required: [true, "{PATH} is required"],
        minlength:[5, "{PATH} must be at least 5 chars"]
    }

}, {timestamps: true})

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;