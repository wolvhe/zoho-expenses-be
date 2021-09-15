<<<<<<< HEAD
var express=require('express');
var router=express.Router();

const {signup}=require('../controllers/signup')
const {login}=require('../controllers/login')
const {savetrip}=require('../controllers/trips')
const {saveadvance}=require('../controllers/advance')
const Cust= require('../models/Cust')
const Trip= require('../models/trips');
const Advance=require('../models/advance')
var tokenauth=require('../controllers/verifyToken');
const req = require('express/lib/request');
const advance = require('../models/advance');


router.get('/getname/:mail',async (req,res)=>{
    // console.log(req.params);
    const userinfo= await Cust.findOne({email:req.params.mail});
    // console.log(userinfo);

    res.send(userinfo.org_name);
});

router.get('/gettrip/:mail',async (req,res)=>{
    console.log(req.params);
    const tripinfo= await Trip.find({email:req.params.mail});
    console.log(tripinfo);

    res.send(tripinfo);
});

router.get('/getadvance/:mail',async (req,res)=>{
    console.log(req.params);
    const advanceinfo= await Advance.find({email:req.params.mail});
    console.log(advanceinfo);

    res.send(advanceinfo);
});

router.get('/test',(req,res)=>{
    console.log("hello");
    res.send("working");
});
router.get('/getuser',(req,res)=>{
    console.log("hibjgfyd");
    res.send("working");
})


router.post('/signup', signup);
router.post('/login', login);
router.post('/trip', savetrip);
router.post('/advance',saveadvance);



=======
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
const {bulkImport} = require('../controllers/reports/bulkImport')

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
router.post('/reports/bulkimport', bulkImport)

//cards
router.post('/cards/new/corporate/manual', newCorporateCardByManual)
router.post('/cards/new/personal/manual', newPersonalCardByManual)
router.post('/cards/new/corporate/bank', newCorporateCardByBank)
router.post('/cards/new/personal/bank', newPersonalCardByBank)
router.get('/cards', getAllCards)

>>>>>>> 2beb213747a8f492c8eeffae6d680a496fde8327
module.exports=router;