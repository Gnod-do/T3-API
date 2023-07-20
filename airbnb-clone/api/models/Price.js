const mongoose = require('mongoose');
const {Schema} = mongoose;

const PriceSchema = new Schema({
    priceDependentOnSize: {type: Number, require},
    coefficient: {type: Number,  default: 1},
});

const PriceModel = mongoose.model('Price', PriceSchema);

module.exports = PriceModel;