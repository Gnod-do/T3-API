const mongoose = require('mongoose');
const {Schema} = mongoose;

const TransportationCostsSchema = new Schema({
    quantity: {type: Number, require},
});

const TransportationCostsModel = mongoose.model('TransportationCosts', TransportationCostsSchema);

module.exports = TransportationCostsModel;