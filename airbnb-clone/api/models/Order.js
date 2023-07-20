const mongoose = require('mongoose');
const {Schema} = mongoose;

const OrderSchema = new Schema({
    size: String,
    quantity: Number,
    mockup: String,
    receiverName: {type: String, require},
    receiverPhoneNumber: {type: String, require},
    addressId: {type: Number, require},
    statusOrder: String,
    createTime: {type: Date, default: Date.now},
    productId: {type: Number, require},
    updateTime: Date,
    typeOfDelivery: {type: String, require},
    transportationCostsId: {type: Number, require},
    charged: {type: Boolean, default: false},
    paymentId: {type: Number, require},
});

const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;