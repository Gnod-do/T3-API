const mongoose = require('mongoose');
const {Schema} = mongoose;

const InvoiceSchema = new Schema({
    order_id: {type: Number, require},
    totalBill: {type: Number, float: true},
});

const InvoiceModel = mongoose.model('Invoice', InvoiceSchema);

module.exports = InvoiceModel;