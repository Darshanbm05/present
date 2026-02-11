import mongoose from "mongoose";

const BusSchema=new mongoose.Schema({
    serviceNo:Number,
    from:{type:String,index:true},
    to:{type:String,index:true},
    via:[String],
    busType:String,
    departureTime:String,
    depot:String,
    sourcePdf:String,
    lastUpdated:Date
});

export default mongoose.model("Bus",BusSchema); 