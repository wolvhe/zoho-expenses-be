const newReportSchema = require("../../models/reports/reports")

const getAllReports = async (req, res) => {
    const AllReports = newReportSchema.find({}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result)
        }
    })
}

const getPendingReports = async (req, res) => {
    const PendingReports = newReportSchema.find({status: "DRAFT"}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result)
        }
    })
}

const getApprovedReports = async (req, res) => {
    const ApprovedReports = newReportSchema.find({status: "APPROVED"}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result)
        }
    })
}

module.exports = {
    getAllReports,
    getPendingReports,
    getApprovedReports
}