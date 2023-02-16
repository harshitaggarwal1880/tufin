
const StudentModel = require('../Modal/Student_schema');
const bcrypt = require('bcryptjs')
const passport = require('passport')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;















// getHome
// getstudentProfile

const getStudentSignup = (req, res) => {
    const { name, email, phone, subjects, password, confirmpassword, city, pincode, classname, address,dob } = req.body;
    console.log(req.body);
    if (password !== confirmpassword) {
        console.log("pswrd not matching");
        // res.render('register',{error:'confirmed password doesn\'t match'});
        return res.status(400).json({ error: "confirm password doesn\'t match" });
    }
    // validation of email alread exist or not
    StudentModel.findOne({ email: email })
        .then(user => {
            if (user) {
                return res.status(400).json({ message: "user already eaxist with this email" });
            }
            else {
                // id use doesnt exist then create a new user data in database
                const new_user = new StudentModel
                    ({
                        name: name,
                        email: email.toLowerCase(),
                        phone: phone,
                        subjects: subjects,
                        password: password,
                        city: city,
                        pincode: pincode,
                        class: classname,
                        address: address,
                        dob:dob
                    })
                // password hashing and then we will save data in database
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) {
                        console.log("generating salt error", err);
                        return;
                    }
                    bcrypt.hash(new_user.password, salt, (err, hash) => {
                        if (err) {
                            console.log("hashing error", err);
                            return;
                        }
                        new_user.password = hash;
                        new_user
                            .save()
                            .then(res.json({ message: new_user.name + " " + "regestried successfully" }))
                            .catch((err) => console.log("saving error is their", err));
                    })

                });
            };
        })
        .catch(err => res.status(500).json({ message: err.message }))
}






const getStudentlogin = async (req, res) => {


    const { loginemail, loginpassword } = req.body;
    if (!loginemail || !loginpassword) {
        // console.log("Please fill all details");
        return res.status(400).send({ message: 'Fill All Fields' });
    }
    else {
        try {
            const user = await StudentModel.findOne({ email: loginemail });

            if (!user) {
                console.log("not a user")
                return res.status(400).json({ message: 'Incorrect email or password' });
            }

            const isPasswordMatch = await bcrypt.compare(loginpassword, user.password);

            if (!isPasswordMatch) {
                return res.status(401).json({ message: 'password is not correct' });
            }
            return res.status(200).json({ message: 'Logined successful', name: user.name, user_data: user });
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({ message: error.message });
        }

    }




}






const EditStudent = (req, res) => {
    const { name, email, phone, subjects, city, pincode, classname, address, _id ,dob} = req.body;
    
    console.log(req.body);

    StudentModel.updateOne({ _id: _id }
        , {$set: {
        name: name,
        email: email,
        phone: phone,
        subjects: subjects,
        city: city,
        pincode: pincode,
        classname: classname,
        address: address,
        dob:dob

    }},(err,result)=>{
        if(err){
            console.log("err in updating student")
            return res.status(500).json({ message: err.message });
        }
        console.log(req.body);
        return res.status(200).json({message:"fileds updated successfully",data:req.body})
    })


}



const displayStudent=(req,res)=>{
    StudentModel.find({})
    .then(data=>res.json(data))
    .catch(err=>console.log(err.message))
}

const deletestudent=(req,res)=>{
    const {student_id}=req.body;
    // console.log(tutor_id)
        // PurchaseModel.findOne({_id: ObjectId(remove_id)}).then(data=>console.log(data)).catch(err=>console.log(err))
    StudentModel.remove({_id: ObjectId(student_id)}, function(error) {
        if (error) {
          console.log(error);
        } else {
          console.log("Document successfully removed!");
        }
      })
    return res.json({message: "removed successfully"});
}
module.exports = {
    getStudentlogin,
    getStudentSignup,
    EditStudent,
    displayStudent,
    deletestudent
}







   // console.log(new_user);
            // bcrypt.genSalt(10,(err,salt)=>{
            //     bcrypt.hash(new_user.password,salt,(err,hash)=>{
            //         if(err) throw err;
            //         new_user.password=hash;
            //         console.log(hash);
            //         new_user.save().then(res.redirect('/login')).catch(err=>console.log(err));
            //     })
// });



                            // new_user.save().then(res.redirect('/')).catch(err => console.log(err));



                            // const getStudentlogin = (req, res,next) => {
//     const { loginemail, loginpassword } = req.body;
//     if (!loginemail || !loginpassword)
//      {
//         console.log("Please fill all details");
//         return res.status(400).send({ error: 'Fill all fields' });
//     }

//     else {
//         passport.authenticate("local",{
//             successRedirect:"/",
//             failureRedirect:"/login",
//             // failureFlash:true
//         })(req, res);
//     }
// }





    // if (!name || !email || !password || !confirmpassword || !phone || !city || !pincode || !classname || !address) {
    //     console.log("filled not compelete")
    //     // res.render('register',{error:'Please fill all the fields'});
    //     return res.status(400).json({ error: 'Please fill all the fields' });
    // }
    // confirm password
