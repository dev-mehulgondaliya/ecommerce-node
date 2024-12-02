const { required } = require('joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: undefined
    },
    stock: {
        type: Number,
        default: undefined
    },
}, {timestamps: true})

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;