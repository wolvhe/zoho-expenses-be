const Trip= require('../models/trips');

const savetrip= async(req,res)=>{
    const trip=new Trip({
        travel_type:req.body.travel_type,
        trip_name:req.body.trip_name,
        business_purpose:req.body.business_purpose
    })

    console.log(trip);
    try {
        
        const savedUser = await cust.save();
        console.log("saved");
        return res.send("sucessfully saved");
    } catch (err) {
        return res.status(400).json(err);
    }
};
module.exports={savetrip};