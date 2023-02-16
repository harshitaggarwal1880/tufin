const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { StudentModel } = require('../Modal/Student_schema');





const loginCheck = passport => {
    passport.use(
        new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
            StudentModel.findOne({ email: email })
                .then(user => {
                    if (!user) {
                        console.log("User not found")
                        return done(null, false, { message: "User not found" })
                    }

                    bcrypt.compare(password, user.password, (error, isMatch) => {
                        if (error) throw error;
                        if (isMatch) {
                            return done(null, user);
                        } else {
                            // console.log("Wrong password");
                            return done(null,false,{message:"Wrong password"});

                        }
                    });
                })
                .catch(error => console.error(error));
        })

    );


    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (error, user) => {
            done(error, user);
        });
    });


}
module.exports = { loginCheck }