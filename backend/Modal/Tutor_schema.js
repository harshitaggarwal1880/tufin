const mongoose =require("mongoose");

const Tutor_scehma=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        // required:true,
        unique:true
    },phone:{
        type:String,
        // required:true,
    },location:{
        type:String,
        // required:true
    },subjects:{
        // type:[String],
        type:String,
        // requried:true
    },password:{
        type:String,
        // required:true
    },hourlyrate:{
        type:String,
        // required:true
    },isadmin:{
        type:Boolean,
        default:false
    },city:{
        type:String,
        // required:true
    },pincode:{
        type:String,
        required:true
    },class:{
        type:String,
        required:true
     },address:{
        type:String,
        // required:true
    },image:{
        type:Buffer,   // required:true
    }
})
const TutorModel=mongoose.model('Tutor',Tutor_scehma);
module.exports=TutorModel;