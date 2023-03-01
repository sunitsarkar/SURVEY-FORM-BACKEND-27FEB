const express = require('express');
const cors = require("cors");
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const registrationRouter=require('./route/route');
const surveyRouter=require("./route/surveyRoute");
const questionRouter=require('./route/questionRoute');
const multer=require('multer');
const User=require('./model/user')

const app = express();
const uri = "mongodb+srv://sunitsarkar:LwP8bgRq3VOKlHWI@cluster0.gxschpx.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery',false);
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    });
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
app.post( "/", async (req, res) => {
    const saveData = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        profession: req.body.profession,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });
    try {
        await saveData.save();
        res.send({ message: "user added" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "registration failed" });
    }
});

//***************************************************** */

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// app.use('/',registrationRouter);
app.use('/survey',surveyRouter);
app.use('/survey/question',questionRouter)

const port = 8000;


app.listen(port, () => {
    console.log("server is live....")
});







