const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema({
    name: String,
    listImage: String,
    optionId: {type: Number, require},
    description: String,
    imageFront: String,
    imageBackside: String,
    design: String,
    priceId: {type: Number, require},
    statusId: {type: Number, require},
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;