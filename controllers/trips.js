const trips = require('../models/trips');
const Trip= require('../models/trips');

 
const savetrip= async(req,res)=>{
    
    
    
    const trip=new Trip({
        
        email:req.body.email,
        // trip_no:count+1,
        travel_type:req.body.travel_type,
        trip_name:req.body.trip_name,
        trip_destination:req.body.trip_destination,
        trip_visa:req.body.trip_visa,
        business_purpose:req.body.business_purpose,
        flight:req.body.flight2,
        hotel:req.body.hotel2,
        car:req.body.car2,
        bus:req.body.bus2,
        train:req.body.train2,
        status:"approved",
        approver:req.body.email
    })


    try {
        
        const Savetrip = await trip.save();
        console.log(Savetrip);
        // return res.send("sucessfully saved");
    } catch (err) {
        return res.status(400).json(err);
    }
};

module.exports={savetrip};