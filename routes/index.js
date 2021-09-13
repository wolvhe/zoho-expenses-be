var express=require('express');
var router=express.Router();

const {signup}=require('../controllers/signup')
const {login}=require('../controllers/login')

//reports functions
const {newReport} = require('../controllers/reports/newReport')
const {getAllReports} = require('../controllers/reports/getReports')
const {getPendingReports} = require('../controllers/reports/getReports')
const {getApprovedReports} = require('../controllers/reports/getReports')
const {updateReports} = require('../controllers/reports/updateReports')

//cards functions
const {newCorporateCardByManual} = require("../controllers/cards/newCard")
const {newPersonalCardByManual} = require("../controllers/cards/newCard")
const {newCorporateCardByBank} = require("../controllers/cards/newCard")
const {newPersonalCardByBank} = require("../controllers/cards/newCard")
const {getAllCards} = require("../controllers/cards/getCards")

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

//cards
router.post('/cards/new/corporate/manual', newCorporateCardByManual)
router.post('/cards/new/personal/manual', newPersonalCardByManual)
router.post('/cards/new/corporate/bank', newCorporateCardByBank)
router.post('/cards/new/personal/bank', newPersonalCardByBank)
router.get('/cards', getAllCards)

module.exports=router;