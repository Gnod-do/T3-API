const mongoose = require('mongoose');
const {Schema} = mongoose;

const AddressSchema = new Schema({
    address1: String,
    address2: String,
    country: String,
    state: String,
});

const AddressModel = mongoose.model('Address', AddressSchema);

module.exports = AddressModel;