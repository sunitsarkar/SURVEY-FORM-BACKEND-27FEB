const express = require('express');

const router = express.Router();
const UserSurvey = require('../model/userSurvay');

router.post('/create', (req,res) => {
    const survey=new UserSurvey(req.body);

    survey.save((err,success)=>{
        res.send({success})
    })
})





/*
this is to store the user data when one tries to registrer.....soo we need only one methode that is post.
*/

module.exports=router;