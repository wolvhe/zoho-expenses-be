var express=require('express');
var router=express.Router();

const {signup}=require('../controllers/signup')
const {login}=require('../controllers/login')
const {savetrip}=require('../controllers/trips')
const {saveadvance}=require('../controllers/advance')
const Cust= require('../models/Cust')
const Trip= require('../models/trips');
var tokenauth=require('../controllers/verifyToken');


router.get('/getname/:mail',async (req,res)=>{
    // console.log(req.params);
    const userinfo= await Cust.findOne({email:req.params.mail});
    // console.log(userinfo);

    res.send(userinfo.org_name);
});

router.get('/gettrip/:mail',async (req,res)=>{
    console.log(req.params);
    const tripinfo= await Trip.findOne({email:req.params.mail});
    console.log(tripinfo);

    res.send(tripinfo);
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



module.exports=router;