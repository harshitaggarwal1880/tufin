const mongoose =require("mongoose");



const Purchase_schema=new mongoose.Schema({

    student_id:{
        type:String,
    },
    tutor_id:{
        type:String,
    },
    Date:{
        type:Date,
        default:new Date().toISOString()
    },
    name:{
        type:String
    },
    subject:String,
    s_name:{
        type:String,
        default:"chatgpt"
    },
    isaccepted:{
        type:Boolean,
        default:false
    }

})

const PurchaseModel=new mongoose.model('Purchasemodal',Purchase_schema);

module.exports =PurchaseModel;
