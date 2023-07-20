const mongoose = require('mongoose');
const {Schema} = mongoose;

const CollectionSchema = new Schema({
    mockupImage: String,
    note: String,
    sku: String,
});

const CollectionModel = mongoose.model('Collection', CollectionSchema);

module.exports = CollectionModel;