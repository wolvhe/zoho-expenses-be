// const newReportSchema = require("../../models/reports/reports")
const bulkImportSchema = require("../../models/reports/bulkImport")

const updateReports = async (req, res) => {
    const currentReport = await bulkImportSchema.findOne({
        name: req.body.reportName,
        email: req.body.email
    })
    // console.log(currentReport.name);
    const updateReport = await bulkImportSchema.updateOne({
        name: req.body.reportName,
        email: req.body.email
    },{
        reportName: req.body.newReportName || currentReport.reportName,
        businessPurpose: req.body.newBusinessPurpose || currentReport.businessPurpose,
        durationFrom: req.body.newDurationFrom || currentReport.durationFrom,
        durationTo: req.body.newDurationTo || currentReport.durationTo,
        associateWithTrip: req.body.newAssociateWithTrip || currentReport.associateWithTrip,
    })
    // console.log(updateReport);
    res.end(JSON.stringify(updateReport))
}

module.exports = {updateReports}