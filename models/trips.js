var mongoose=require('mongoose');
const { boolean } = require('webidl-conversions');

const tripSchema=new mongoose.Schema({
    // trip_id:{
    //     type:Number,
    //     min:6,
    //     max:255
    // },
    travel_type:{
        type:String,
        min:6,
        max:255
    },
    trip_name:{
        type:String,
        min:6,
        max:255
    },
    // trip_designation:{
    //     type:String,
    //     min:6,
    //     max:255
    // },
    // trip_visa:{
    //     type:Boolean,
    //     min:6,
    //     max:255
    // },
    business_purpose:{
        type:String,
        min:6,
        max:255
    },

    // flight_type:{
    //     type:String,
    //     min:6,
    //     max:255
    // },
    // flight_depart_from:{
    //     type:String,
    //     min:6,
    //     max:255
    // },
    // flight_description:{
    //     type:String,
    //     min:6,
    //     max:255
    // }

});

module.exports=mongoose.model('Trip',tripSchema)