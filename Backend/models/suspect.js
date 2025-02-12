import mongoose from "mongoose";

const SuspectScehma=new mongoose.Schema({
    name:String,
    age:Number,
    criminalHistory:[{
        crimeId:mongoose.Schema.Types.ObjectId
    }],
    address:String,
    riskScore:Number
})

mondule.exports=model("Suspect",SuspectScehma);