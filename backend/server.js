const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
// const fileUpload=require('express-fileupload');
// const multer=require('multer');
// const {Router}=require('./Routes/Student');
// to upload image of certificates of Tutor

dotenv.config();

// const upload = multer({ dest: 'images/' })

const app = express();
app.use(cors());
// app.use(fileUpload());
const port = process.env.PORT || 5000;

// const database = process.env.connection_link.replace('<PASSWORD>', process.env.password);


// connect datbase to mongodb
mongoose.connect(process.env.connection_link, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((data) => { console.log("done connection") })
    .catch(err => console.error(err))



app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ encoded: true, urlencoded: true }));


app.use('/Student', require('./Routes/Student'));
app.use('/Tutor', require('./Routes/Tutor'));
app.use('/Purchase', require('./Routes/Purchase'));
app.get('/', (req, res) => {
    return res.send("<h1>helllo</h1>")
})


app.listen(port, () => console.log("running at port 4000"))


