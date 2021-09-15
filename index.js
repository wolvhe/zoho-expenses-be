var express = require('express');
var app = express();


var tokenauth=require('./controllers/verifyToken');

var routes=require('./routes/index.js');

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

var cors = require('cors');
var dotenv=require('dotenv');
var mongoose=require('mongoose');
const trips = require('./models/trips');


dotenv.config();
app.use(cors());



// mongoose.connect(process.env.db_con,{useNewUrlParser: true,useUnifiedTopology: true },()=>{
//    console.log("db connected....");
// })







var db=mongoose.connect(process.env.db_con1,{ useNewUrlParser: true,useUnifiedTopology: true },()=>{
   console.log("db connected....");
})

// var query = trips.find();
// console.log(trips.estimatedDocumentCount)
// query.count(function (err, count) {
//    if (err) console.log(err)
//    else console.log("Count is", count+1)

// });


app.get('/', function(req, res){
   console.log("App");

   // res.send("Hello world!");
});

app.use('/api',routes);





app.listen(3000,()=>{
    console.log("App listeing on 3000");
});