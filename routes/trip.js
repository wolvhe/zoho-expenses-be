var express=require('express');
var router=express.Router();

const {savetrip}=require('../controllers/trips')

router.get('/', function(req, res){
    res.send("Hello world!");
 });

router.get('/test',(req,res)=>{
    console.log("hello");
    res.send("working");
});

router.post('/trip', savetrip);

module.exports=router;