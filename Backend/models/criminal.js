import mongoose,{Schema,Types,model} from "mongoose"
const CrimeSchema= new Schema({
   crimeType:{
    type:String,
    required:true
   },
   location:{
    type:String,
    required:true
   },
   description:String,
   date:{
    type:String,
    default:closed,
   },
   status:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Suspect'
   },
   suspects:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Suspect"
    }
   ],
   evidence:[{type:String}]
   
})

module.exports=model('Crime',CrimeSchema);

