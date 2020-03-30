const mongoose = require("mongoose");
const { Schema } = mongoose;

const logEntrySchema = new Schema({   
        type: String,
        reps: Number,
        sets: Number,
        duration: Number,
        notes: String,  
});

 mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;