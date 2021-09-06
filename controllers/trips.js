const Trip= require('../models/trips');


const savetrip= async(req,res)=>{
    const trip=new Trip({
        // trip_id:_id,
        travel_type:req.body.travel_type,
        trip_name:req.body.trip_name,
        trip_destination:req.body.trip_destination,
        trip_visa:req.body.trip_visa,
        business_purpose:req.body.business_purpose,
        mode_of_transport:req.body.mode_of_transport
    })

    console.log(trip);
    try {
        
        const Savetrip = await trip.save();
        console.log(Savetrip);
        return res.send("sucessfully saved");
    } catch (err) {
        return res.status(400).json(err);
    }
};
module.exports={savetrip};