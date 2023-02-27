//To connect our app to the database in index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./config/config').get(process.env.NODE_ENV);


const app = express();
// app use
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());

// database connection
// mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Users",
    { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
        if (err) console.log(err);
        console.log("database is connected");
    });


app.get('/', (req, res) => {
    res.status(200).send(`Welcome to sign-up api`);
});

// listening port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`app is live at ${PORT}`);
});


