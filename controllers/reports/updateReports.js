// const newReportSchema = require("../../models/reports/reports")
const bulkImport = require("../../models/reports/bulkImport")
const bulkImportSchema = require("../../models/reports/bulkImport")

const updateReports = async (req, res) => {
    const currentReport = await bulkImportSchema.findOne({
        reportName: req.body.reportName,
        email: req.body.email
    })
    // console.log(currentReport.name);
    const updateReport = await bulkImportSchema.updateOne({
        reportName: req.body.reportName,
        email: req.body.email
    },{
        reportName: req.body.newReportName || currentReport.reportName,
        businessPurpose: req.body.newBusinessPurpose || currentReport.businessPurpose,
        startDate: req.body.newStartDate || currentReport.startDate,
        endDate: req.body.newEndDate || currentReport.endDate,
        associateWithTrip: req.body.newAssociateWithTrip || currentReport.associateWithTrip,
    })
    // console.log(updateReport);
    res.end(JSON.stringify(updateReport))
}

const updateExpenseInReport = async (req, res) => {
    const reportDetails = {
        _id: req.body.reportId
    }
    const updatedReport = await bulkImportSchema.findOneAndUpdate(reportDetails,
        {
            $addToSet: {expenseList: {expenseId: req.body.expenseId}},
            $push: {historyList: {message: `Total of ${req.body.amount} is added`}}
        })
    res.end(JSON.stringify(updatedReport))
}

const updateAdvanceInReport = async (req, res) => {
    const reportDetails = {
        _id: req.body.reportId
    }
    const updatedReport = await bulkImportSchema.findOneAndUpdate(reportDetails,
        {
            $addToSet: {advanceList: {advanceId: req.body.advanceId}},
            $push: {historyList: {message: `An Advance payment of ${req.body.amount} has been applied`}}
        })
}

module.exports = {updateReports, updateExpenseInReport, updateAdvanceInReport}