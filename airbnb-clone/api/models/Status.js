const mongoose = require('mongoose');
const {Schema} = mongoose;

const StatusSchema = new Schema({
    avaiable: {type: String, require},
});

const StatusModel = mongoose.model('Status', StatusSchema);

module.exports = StatusModel;