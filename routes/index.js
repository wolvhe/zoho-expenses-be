var express = require('express');
var router = express.Router();

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

const { expense } = require('../controllers/expense')
const { bulkexpenses } = require('../controllers/bulkexpenses')
const { report } = require('../controllers/report')




const Cust = require('../models/Cust')
const Trip = require('../models/trips');
const Report = require('../models/report');


var tokenauth = require('../controllers/verifyToken');
const Expense = require('../models/expense');


// router.post('/sortexpenses', async (req, res) => {
//     console.log(req.body);
//     const userinfo = await Expense.findOne({ email: req.body.email });
//     console.log(userinfo.expenses);
//     const arr = userinfo.expenses;
//     const sorted=arr.filter(ex=>ex.category===req.body.category)
//     res.send(sorted);
// });

router.post('/sortexpenses', async (req, res) => {
    console.log(req.body);
    let a=1;
    const b="expenses."+req.body.field;
    if(req.body.order!=="asc"){
        a=-1;
    }
    Expense.aggregate([
        // Initial document match (uses index, if a suitable one is available)
        { $match: {
            email:req.body.email
        }},
    
        // Expand the scores array into a stream of documents
        { $unwind: '$expenses' },
    
        // Sort in descending order
        { $sort: {
            [b] : a
        }}
    ]).then(itm=>res.send(itm))
    .catch(err=>{
        console.log(err);
        res.send(err);
    })
    // res.send(sorted);
});


router.get('/getname/:mail', async (req, res) => {
    // console.log(req.params);
    const userinfo = await Cust.findOne({ email: req.params.mail });
    // console.log(userinfo);

    res.send(userinfo.org_name);
});

router.get('/gettrip/:mail', async (req, res) => {
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


router.get('/getreports/:mail', async (req, res) => {
    // console.log(req.params);
    const repinfo = await Report.findOne({ email: req.params.mail });
    // console.log(repinfo);
    const repname=[];
    repinfo.reports.map(i=>repname.push(i.rep_name))
    res.send(repname);
});

router.get('/test', (req, res) => {
    console.log("hello");
    res.send("working");
});



router.post('/signup', signup);
router.post('/login', login);
router.post('/trip', savetrip);
router.post('/advance', saveadvance);
router.post('/newexpense', expense);
router.post('/bulkexpenses', bulkexpenses);
router.post('/addreport', report);






module.exports = router;