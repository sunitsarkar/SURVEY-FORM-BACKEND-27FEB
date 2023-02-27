const express = require('express');
const cors = require("cors");
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const registrationRouter=require('./route/route')

const app = express();
const uri = "mongodb+srv://sunitsarkar:LwP8bgRq3VOKlHWI@cluster0.gxschpx.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    });

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());
app.use('/',registrationRouter)

const port = 8000;


app.listen(port, () => {
    console.log("server is live....")
});







