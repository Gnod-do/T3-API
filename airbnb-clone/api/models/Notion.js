const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotionSchema = new Schema({
    content: String,
    title: String,
    dataTime: {type: Date, default: Date.now},
    createAt: {type: Date, default: Date.now},
    updateAt: Date,
});

const NotionModel = mongoose.model('Notion', NotionSchema);

module.exports = NotionModel;