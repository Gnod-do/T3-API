const mongoose = require('mongoose');
const {Schema} = mongoose;

const AccountSchema = new Schema({
    username: String,
    password: String,
});

const AccountModel = mongoose.model('Account', AccountSchema);

module.exports = AccountModel;