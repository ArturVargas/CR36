
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String
    },
    price: Number,
    stock_num: Number
}, {timestamps: true});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;