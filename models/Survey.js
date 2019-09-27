const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecpientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecpientSchema],
    yes: { type: Number, default: 0},
    no: { type: Number, default: 0},
    _user: { type: Schema.Types.ObjectId, ref: 'user'},
});

mongoose.model('surveys', surveySchema);