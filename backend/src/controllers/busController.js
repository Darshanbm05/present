import Bus from "../models/bus.js";

export const getBuses=async(req,res)=>{
    try{
        const{from,to}=req.query;
        
        if(!from || !to){
            return res.status(400).json({
                message:"from and to required"
            });
        }

        const buses=await Bus.find({
            from,
            to
        }).sort({departureTime:1});

        res.json(buses);
    }catch(err){
        res.status(500).json({message:"Server error"});
    }
};