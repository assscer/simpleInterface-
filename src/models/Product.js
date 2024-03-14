const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    size: String,
    color: String,
    price: String,
    quantity: String,
});

module.exports = mongoose.model('Product', productSchema);
