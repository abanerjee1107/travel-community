const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
    // other fields
});

module.exports = mongoose.model('Event', eventSchema);
