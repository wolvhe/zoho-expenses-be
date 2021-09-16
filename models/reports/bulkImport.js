const mongoose = require("mongoose")

const bulkImportSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true
    },
    status: {
        type: String
    },
    reportName: {
        type: String,
    },
    reportNumber: {
        type: Number,
        default: 0
    },
    businessPurpose: {
        type: String
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    associateWithTrip: {
        type: String,
    },
    reportType: {
        type: String
    },
    approversEmail: {
        type: String
    },
    expenseDate: {
        type: String,
    },
    expenseCurrencyCode: {
        type: String
    },
    location: {
        type: String
    },
    exchangeRate: {
        type: String
    },
    mileageRate: {
        type: String
    },
    startOdometerReading: {
        type: String
    },
    endOdometerReading: {
        type: String
    },
    mileageType: {
        type: String
    },
    merchangName: {
        type: String
    },
    reference: {
        type: String
    },
    total: {
        type: Number,
        default: 0
    },
    toBeReimbursed: {
        type: Number,
        default: 0
    },
    isReimbursable: {
        type: Boolean,
    },
    isBillable: {
        type: String
    },
    expenseCustomerName: {
        type: String
    },
    paidThrough: {
        type: String
    },
    paymentMode: {
        type: String
    },
    isInclusiveTax: {
        type: String
    },
    ownersEmail: {
        type: String
    },
    expenseCategory: {
        type: String,
    },
    expenseAmount: {
        type: String,
    },
    expenseProjectName: {
        type: String
    },
    expenseDescription: {
        type: String
    },
    taxName: {
        type: String
    },
    taxPercentage: {
        type: String
    },
    taxType: {
        type: String
    },
    expenseType: {
        type: String
    },
})

module.exports = mongoose.model('bulkImportSchema', bulkImportSchema)