const express = require('express');
const Router=express.Router();
const {getTutorLogin,getTutorSignup,DisplayTutor,SearchTutor,EditTutor,getAdmin,deletetutor}=require('../Controller/Tutor_controller');




Router
.get('/display',DisplayTutor)
.get('/searchtutor',SearchTutor)
.post('/Login',getTutorLogin)
.post('/Admin',getAdmin)
.post('/Singup',getTutorSignup)
.put('/EditTutor',EditTutor)
.delete('/delete',deletetutor)
module.exports= Router;