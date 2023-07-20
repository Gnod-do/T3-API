const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  name: String,
  role: String,
  accountId: {type: Number, require},
  yearOfBirth: {type: Number, require},
  email: {type:String, unique:true},
  phoneNumber: String,
  notionId: {type: Number, require},
  storeName: String,
  permission: String,
  lastLoginTime: {type: Date, default: Date.now},
  reportId: {type: Number, require},
  listMockupId: {type: Number, require},
  collectionId: {type: Number, require},
  cashBackCalId: {type: Number, require},
  walletId: {type: Number, require},
  adressId: {type: Number, require},
  password: String,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;