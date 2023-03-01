const express = require('express');

const router = express.Router();
const User = require('../model/user');

router.post('/', (req,res) => {
    const user=new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        profession: req.body.profession,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });

    user.save((err,success)=>{
        res.send({success})
    })
});

/*
this is to store the user data when one tries to registrer.....soo we need only one methode that is post.
*/

module.exports=router;
