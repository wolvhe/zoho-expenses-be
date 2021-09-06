var express = require('express');
var app = express();

<<<<<<< HEAD
var routes=require('./routes/trip.js');
=======
var routes=require('./routes/index.js');
>>>>>>> 53fd304c92e3ea7ea3dfe37a2768c03f8d081195
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

var cors = require('cors');
var dotenv=require('dotenv');
var mongoose=require('mongoose');


dotenv.config();
app.use(cors());



<<<<<<< HEAD
// mongoose.connect(process.env.db_con,{useNewUrlParser: true,useUnifiedTopology: true },()=>{
//    console.log("db connected....");
// })





app.use('/',routes);
=======
mongoose.connect(process.env.db_con,{ useNewUrlParser: true,useUnifiedTopology: true },()=>{
   console.log("db connected....");
})



app.use('/api',routes);

app.get('/', function(req, res){
   res.send("Hello world!");
});
>>>>>>> 53fd304c92e3ea7ea3dfe37a2768c03f8d081195

app.listen(3000,()=>{
    console.log("App listeing on 3000");
});