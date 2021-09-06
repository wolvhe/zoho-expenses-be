var express=require('express');
var router=express.Router();

const {signup}=require('../controllers/signup')
const {login}=require('../controllers/login')
const {savetrip}=require('../controllers/trips')
var tokenauth=require('../controllers/verifyToken');



router.get('/test',(req,res)=>{
    console.log("hello");
    res.send("working");
});

router.post('/signup', signup);
router.post('/login', login);
router.post('/trip', tokenauth,savetrip);




module.exports=router;