const express = require('express');

const router = express.Router();
const UserSurvey = require('../model/userSurvey');


// to create 
router.post('/create', (req, res) => {
    const survey = new UserSurvey(req.body);

    survey.save((err, success) => {
        res.send({ success })
    })
});


//to read all surveys to render on login
router.get('/surveys',  (req, res) => {
    UserSurvey.find().sort("-createdAt")
    .exec((err, surveys) => {
      // error checking
      if (err || !surveys) {
        return res.status(400).json({
          error: "Something went wrong in finding all todos",
        });
      }
      // return all the todos in json format
      res.json(surveys);
    });
});


//not finished******************************************
router.get('/surveys/:name',(req,res)=>{
    const name=req.body.name;
    console.log(name)
    UserSurvey.find({name:name}).exec((err, surveys) => {
        // error checking
        if (err || !surveys) {
          return res.status(400).json({
            error: "Something went wrong in finding all todos",
          });
        }
        // return all the todos in json format
        res.json(surveys);
      });
})

//********************************************************* */


  


module.exports = router;