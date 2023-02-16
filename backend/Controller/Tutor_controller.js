
const TutorModel = require('../Modal/Tutor_schema');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

// const passport = require('passport');


const getTutorSignup = (req, res) => {
    const { name, email, phone, location, subjects, password, hourlyrate, isadmin, confirmpassword, city, pincode, classname, address } = req.body;
    if (password !== confirmpassword) {
        console.log("pswrd not matching");
        return res.status(400).json({ error: "confirm password doesn\'t match" });
    }
    // validation of email alread exist or not
    TutorModel.findOne({ email: email })
        .then(user => {
            if (user) {
                return res.redirect('/Tutor/Login');
            }
            else {
                // id use doesnt exist then create a new user data in database
                const new_user = new TutorModel
                    ({   name: name,
                        email: email,
                        phone: phone,
                        subjects: subjects,
                        password: password,
                        location: location,
                        hourlyrate: hourlyrate,
                        isadmin: isadmin,
                        city: city,
                        pincode: pincode,
                        class: classname,
                        address: address, })
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
                            .catch((err) => console.log("saving", err));
                    })

                });
            };
        });
}









const getTutorLogin = async (req, res) => {


    const { loginemail, loginpassword } = req.body;
    // console.log(req.body);
    if (!loginemail || !loginpassword) {
        // console.log("Please fill all details");
        return res.status(400).send({ message: 'Fill All Fields' });
    }
    else {
        try {
            const user = await TutorModel.findOne({ email: loginemail });

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








const DisplayTutor = (req, res) => {

    TutorModel.find({})
        .then(data => res.json(data))
        .catch(err => console.log(err))
    // return res.send("done");
}

const SearchTutor = (req, res) => {

    TutorModel.find({name:req.body.name})
        .then(data => res.json(data))
        .catch(err => console.log(err))
    // return res.send("done");
}









const EditTutor = (req, res) => {
    const { name, email, phone, location, subjects, hourlyrate, city, pincode, classname, address, _id } = req.body;

    TutorModel.updateOne({ _id: _id }
        , {
            $set: {
                name: name,
                email: email,
                phone: phone,
                subjects: subjects,
                city: city,
                pincode: pincode,
                classname: classname,
                address: address,
                location: location,
                hourlyrate: hourlyrate,

            }
        }, (err, result) => {
            if (err) {
                console.log("err in updating student")
                return res.status(500).json({ message: err.message });
            }
            console.log(req.body);
            return res.status(200).json({ message: "fileds updated successfully", data: req.body })
        })
}












const getAdmin = async (req, res) => {
    const { loginemail, loginpassword } = req.body;
    console.log(req.body);
    if (!loginemail || !loginpassword) {
        // console.log("Please fill all details");
        return res.status(400).send({ message: 'Fill All Fields' });
    }
    else {
        try {
            const user = await TutorModel.findOne({ email: loginemail, isadmin: true });

            if (!user) {
                // console.log("not a user")
                return res.status(400).json({ message: 'This user is not Admin' });
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






const deletetutor = (req, res) => {
    const { tutor_id } = req.body;
    // console.log(tutor_id)
    // PurchaseModel.findOne({_id: ObjectId(remove_id)}).then(data=>console.log(data)).catch(err=>console.log(err))
    TutorModel.remove({ _id: ObjectId(tutor_id) }, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log("Document successfully removed!");
        }
    })
    return res.json({ message: "removed successfully" });
}
module.exports = {
    getTutorLogin,
    getTutorSignup,
    DisplayTutor,
    SearchTutor,
    EditTutor,
    getAdmin,
    deletetutor

}







// const getTutorLogin = (req, res,next) => {
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



// console.log(req.body);



    // if (!name || !email || !password || !confirmpassword || !phone || !city || !pincode || !classname || !address|| !location || !hourlyrate) {
    //     console.log("filled not compelete")
    //     // res.render('register',{error:'Please fill all the fields'});
    //     return res.status(400).json({ error: 'Please fill all the fields' }).redirect('/');
    // }
    // confirm password