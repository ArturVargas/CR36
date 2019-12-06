
const mongoose = require('mongoose');
//const product = require('./product');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    direction: {
        type: String
    },
    products: {
        type:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product'
            }
        ]
    }
});

const Store = mongoose.model('store', StoreSchema);

module.exports = Store;