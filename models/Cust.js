<<<<<<< HEAD
var mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    org_name:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:1024
    },
    country:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    Phone:{
        type:String,
        required:true,
        min:10,
        max:12
    }

});



=======
var mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    org_name:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:1024
    },
    country:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    Phone:{
        type:String,
        required:true,
        min:10,
        max:12
    }

});

>>>>>>> 224a32f9f66dbdbf8d728a6706c42840170fa4ed
module.exports=mongoose.model('Cust',userSchema);