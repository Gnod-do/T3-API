const mongoose = require('mongoose');
const {Schema} = mongoose;

const CashBackCalSchema = new Schema({
    level: {type: Number, default: 1},
    cashBack:{type: Number, float: true},
});

const CashBackCalModel = mongoose.model('CashBackCal',CashBackCalSchema);

module.exports = CashBackCalModel;