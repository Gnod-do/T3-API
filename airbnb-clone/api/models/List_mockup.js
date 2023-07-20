const mongoose = require('mongoose');
const {Schema} = mongoose;

const ListMockupSchema = new Schema({
    name: String,
    dataCreated: {type: Date, default: Date.now},
    productId: {type: Number, require},
});

const ListMockupModel = mongoose.model('ListMockup', ListMockupSchema);

module.exports = ListMockupModel;