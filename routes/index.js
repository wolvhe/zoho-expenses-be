var express=require('express');
var router=express.Router();

const {signup}=require('../controllers/signup')
const {login}=require('../controllers/login')

const {newReport} = require('../controllers/newReport')
const {getAllReports} = require('../controllers/getReports')
const {getPendingReports} = require('../controllers/getReports')
const {getApprovedReports} = require('../controllers/getReports')
const {updateReports} = require('../controllers/updateReports')

router.get('/test',(req,res)=>{
    console.log("hello");
    res.send("working");
});

router.post('/signup', signup);
router.post('/login', login);

// reports 
router.post('/reports/new', newReport)
router.get('/reports', getAllReports)
router.get('/reports/pending', getPendingReports)
router.get('/reports/approved', getApprovedReports)
router.put('/reports/edit', updateReports)

module.exports=router;