var mongoose=require('mongoose');
const { boolean } = require('webidl-conversions');

const tripSchema=new mongoose.Schema({
    trip_id:{
        type:Number,
        min:6,
        max:255
    },
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
    trip_designation:{
        type:String,
        min:6,
        max:255
    },
    trip_visa:{
        type:Boolean,
        min:6,
        max:255
    },
    business_purpose:{
        type:String,
        min:6,
        max:255
    },
    mode_of_transport:{
        type:String
    },

    flight_type:{
        type:String,
        min:6,
        max:255
    },
    flight_depart_from:{
        type:String,
        min:6,
        max:255
    },
    flight_arrive_at:{
        type:String,
        min:6,
        max:255
    },
    flight_departure_time:{
        type:String,
        min:6,
        max:255
    },
    flight_description:{
        type:String,
        min:6,
        max:255
    },
    hotel_location:{
        type:String,
        min:6,
        max:255
    },
    hotel_check_in:{
        type:String,
        min:6,
        max:255
    },
    hotel_check_out:{
        type:String,
        min:6,
        max:255
    },
    hotel_description:{
        type:String,
        min:6,
        max:255
    },
    car_pick_up:{
        type:String,
        min:6,
        max:255
    },
    car_drop_off:{
        type:String,
        min:6,
        max:255
    },
    car_description:{
        type:String,
        min:6,
        max:255
    },
    bus_depart_from:{
        type:String,
        min:6,
        max:255
    },
    bus_arrive_at:{
        type:String,
        min:6,
        max:255
    },
    bus_departure_time:{
        type:String,
        min:6,
        max:255
    },
    bus_description:{
        type:String,
        min:6,
        max:255
    },
    train_depart_from:{
        type:String,
        min:6,
        max:255
    },
    train_arrive_at:{
        type:String,
        min:6,
        max:255
    },
    train_departure_time:{
        type:String,
        min:6,
        max:255
    },
    train_description:{
        type:String,
        min:6,
        max:255
    },

});

module.exports=mongoose.model('Trip',tripSchema)