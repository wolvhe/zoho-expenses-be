var express = require('express');
var app = express();


var tokenauth=require('./controllers/verifyToken');

var routes=require('./routes/index.js');

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

var cors = require('cors');
var dotenv=require('dotenv');
var mongoose=require('mongoose');


dotenv.config();
app.use(cors());



// mongoose.connect(process.env.db_con,{useNewUrlParser: true,useUnifiedTopology: true },()=>{
//    console.log("db connected....");
// })







mongoose.connect(process.env.db_con,{ useNewUrlParser: true,useUnifiedTopology: true },()=>{
   console.log("db connected....");
})



app.use('/api',routes);

app.get('/', function(req, res){
   res.send("Hello world!");
});


app.listen(3000,()=>{
    console.log("App listeing on 3000");
});