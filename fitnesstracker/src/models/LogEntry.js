const mongoose = require("mongoose");

const { Schema } = mongoose;

const logEntrySchema = new Schema({
    Exercise: {
        type: String,
        required: true,
    },
    Notes: {
        Reps: Number,
        Sets: Number,
        Duration: Number,
        GeneralNotes: String,
    }, 
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;