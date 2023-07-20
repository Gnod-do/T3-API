const mongoose = require('mongoose');
const {Schema} = mongoose;

const PaymentSchema = new Schema({
    paymentMethod: {type: String, require},
    checkAmount: {type: Boolean, default: false},
    verification: {type: String, default: ''},
    walletId: {type: Number, require},
});

const PaymentModel = mongoose.model('Payment', PaymentSchema);

module.exports = PaymentModel;