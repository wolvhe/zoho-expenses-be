var express=require('express');
var router=express.Router();

const {signup}=require('../controllers/signup')
const {login}=require('../controllers/login')





router.get('/test',(req,res)=>{
    console.log("hello");
    res.send("working");
});

router.post('/signup', signup);
router.post('/login', login);





module.exports=router;