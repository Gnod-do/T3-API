const mongoose = require('mongoose');
const {Schema} = mongoose;

const WalletSchema = new Schema({
    bankAccount: {type: String, require},
    coint: Number,
});

const WalletModel = mongoose.model('Wallet', WalletSchema);

module.exports = WalletModel;