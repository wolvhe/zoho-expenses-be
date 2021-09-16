// const newReportSchema = require("../../models/reports/reports")
const bulkImportSchema = require("../../models/reports/bulkImport")

const newReport = async (req, res) => {
    try {
        const report = new bulkImportSchema({
            email: req.body.email,
            reportName: req.body.reportName,
            businessPurpose: req.body.businessPurpose,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            associateWithTrip: req.body.associateWithTrip,
            status: req.body.status
        })
        await report.save()
        res.end(JSON.stringify(report))
    
        // res.end(JSON.stringify(report))
    } catch (err) {
        console.log(err);
    }
}

module.exports = {newReport}