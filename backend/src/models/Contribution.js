import mongoose from "mongoose";

const ContributionSchema=new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    departureTime:String,
    busType:String,
    message:String,

    status:{
        type:String,
        default:"pending"
    }
},{timestamps:true});

export default mongoose.model("Contribution",ContributionSchema);