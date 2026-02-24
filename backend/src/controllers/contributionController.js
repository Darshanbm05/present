import Contribution from "../models/Contribution.js";

export const createContribution=async(req,res)=>{
    try{
        const newContribution=await Contribution.create(req.body);

        res.status(201).json({
            message:"Contribution submitted",
            data:newContribution
        });
    }catch(err){
        res.status(500).json({message:"Error saving contribution"});
    }
};