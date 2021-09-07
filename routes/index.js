var express=require('express');
var router=express.Router();

const {signup}=require('../controllers/signup')
const {login}=require('../controllers/login')
const {savetrip}=require('../controllers/trips')
const {saveadvance}=require('../controllers/advance')
var tokenauth=require('../controllers/verifyToken');



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