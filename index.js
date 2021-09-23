var express = require('express');
var app = express();
var multer = require('multer');

var tokenauth=require('./controllers/verifyToken');

var routes=require('./routes/index.js');

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

var cors = require('cors');
var dotenv=require('dotenv');
var mongoose=require('mongoose');


dotenv.config();
app.use(cors());



mongoose.connect(process.env.db_con1,{useNewUrlParser: true,useUnifiedTopology: true },()=>{
   console.log("db connected....");
})


// File upload settings  
const PATH = './uploads';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
});

let upload = multer({
  storage: storage
});


// POST File
app.post('/api/upload', upload.array('bills'), function (req, res) {
   console.log(req.files);
   if (!req.file) {
     console.log("No file is available!");
     return res.send({
       success: false
     });
 
   } else {
     console.log('File is available!');
     return res.send({
       success: true
     })
   }
 });




app.get('/', function(req, res){
   console.log("App");

   res.send("Hello world!");
});

app.use('/api',routes);




app.listen(3000,()=>{
    console.log("App listeing on 3000");
});
