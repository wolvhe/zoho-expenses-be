const newReportSchema = require("../../models/reports/reports")

const updateReports = async (req, res) => {
    const currentReport = await newReportSchema.findOne({
        name: req.body.currentName
    })
    // console.log(currentReport.name);
    const updateReport = await newReportSchema.updateOne({
        name: req.body.currentName,
    },{
        name: req.body.newName || currentReport.name,
        businessPurpose: req.body.newBusinessPurpose || currentReport.businessPurpose,
        durationFrom: req.body.newDurationFrom || currentReport.durationFrom,
        durationTo: req.body.newDurationTo || currentReport.durationTo,
        associateWithTrip: req.body.newAssociateWithTrip || currentReport.associateWithTrip,
        status: req.body.newStatus || currentReport.status,
        total: req.body.total || currentReport.total,
        toBeReimbursed: req.body.toBeReimbursed || currentReport.toBeReimbursed
    })
    // console.log(updateReport);
    res.end(JSON.stringify(updateReport))
}

module.exports = {updateReports}