const newReportSchema = require("../../models/reports")

const newReport = async (req, res) => {
    try {
        const report = new newReportSchema({
            name: req.body.name,
            businessPurpose: req.body.businessPurpose,
            durationFrom: req.body.durationFrom,
            durationTo: req.body.durationTo,
            associateWithTrip: req.body.associateWithTrip,
            status: req.body.status,
            total: "0",
            toBeReimbursed: "0"
        })
        // report.durationFrom instanceof Date
        // report.durationTo instanceof Date
        // report.validateSync().errors['durationFrom']
        // report.validateSync().errors['durationTo']
        const savedReport = await report.save()
        res.end(JSON.stringify(report))
    
        // res.end(JSON.stringify(report))
    } catch (err) {
        console.log(err);
    }
}

module.exports = {newReport}