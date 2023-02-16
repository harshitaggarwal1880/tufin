const express = require('express');
const Router=express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// const AddtoDb=require('../Controller/Purchase');
const PurchaseModel=require('../Modal/Purchase_schema');

Router
.post('/user',(req,res)=>{
    const{s_id}=req.body
    console.log("post",req.body)
    PurchaseModel.find({student_id:s_id}).then(data=>res.json(data)).catch(err=>console.log(err))
    // res.send("done")
})
.post('/AddtoDB',(req,res)=>{

    const{s_id,t_id,name,subject,s_name}=req.body
    console.log(req.body);

    const new_purchase=new PurchaseModel({
        student_id:s_id,
        tutor_id:t_id,
        name:name,
        subject:subject,
        s_name:s_name
    })
    new_purchase.save().then(res.json({message :"slot booked succesfully created"})).catch(err=>res.json({message:"hogya tata bye bye"}))
})
.post('/remove',(req,res)=>{
    const{remove_id}=req.body
    console.log(req.body)
    // PurchaseModel.findOne({_id: ObjectId(remove_id)}).then(data=>console.log(data)).catch(err=>console.log(err))
    PurchaseModel.remove({_id: ObjectId(remove_id)}, function(error) {
        if (error) {
          console.log(error);
        } else {
          console.log("Document successfully removed!");
        }
      })
    return res.json({message: "removed successfully"});
    

})
.post('/Tutor',(req,res)=>{
    let {tutor_id}=req.body;
    console.log(tutor_id);
    PurchaseModel.find({tutor_id:tutor_id}).then(data=>res.json(data)).catch(err=>console.log(err))
})
.put('/Accept',(req,res)=>{
    const {tutor_id}=req.body;
console.log(tutor_id)
    PurchaseModel.updateOne({_id:ObjectId(tutor_id)},{$set:{isaccepted:true}},{new:true},function(error){
        if(error){
            console.log(error);
        }
        else{
            console.log("Accepted succesfully");
        }
    })
    return res.json({message:"Accepted succesfully"});
})
.get('/display',(req,res)=>{
    PurchaseModel.find({})
    .then(data=>res.json(data))
    .catch(err=>console.log(err))



})





module.exports =Router