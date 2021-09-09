const mongoose = require("mongoose")

const newReportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    businessPurpose: {
        type: String,
        max: 500
    },
    durationFrom: {
        type: String,
    },
    durationTo: {
        type: String,
    },
    associateWithTrip: {
        type: String,
    },
    status: {
        type: String,
    },
    total: {
        type: String
    },
    tobeReimbursed: {
        type: String
    }
})

const importReports = new mongoose.Schema({
    file: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('newReportSchema', newReportSchema)