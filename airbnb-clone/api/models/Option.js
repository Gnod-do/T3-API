const mongoose = require('mongoose');
const {Schema} = mongoose;

const OptionSchema = new Schema({
    size: String,
    style: String,
    color: String,
});

const OptionModel = mongoose.model('Option', OptionSchema);

module.exports = OptionModel;