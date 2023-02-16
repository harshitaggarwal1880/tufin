const express = require('express');
const Router=express.Router();
const{getStudentlogin,getStudentSignup,EditStudent,displayStudent,deletestudent}=require('../Controller/Student_controller');



Router
.get('/display',displayStudent)
.post('/Login',getStudentlogin)
.post('/Singup',getStudentSignup)
.post('/delete',deletestudent)
.put('/EditStudent',EditStudent)


module.exports= Router;
