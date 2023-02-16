// const { stringify } = require("querystring");

const mongoose = require('mongoose');

const Student_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        // required:true,
    },
    subjects:{
        type:String,},
    password:{
        type:String,
        required:true},
    city:{
        type:String,},
    pincode:{
        type:Number,
        required:true },
    class:{
        type:String,
        // required:true},
    },
    address:{
        type:String,},
    dob:{
        type:Date
    }
        // required:true}
})
const StudentModel=mongoose.model('Student_model',Student_schema);
module.exports=StudentModel;