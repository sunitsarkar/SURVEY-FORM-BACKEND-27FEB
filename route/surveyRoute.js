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

router.param("name", (req, res, next, name) => {
  UserSurvey.find({name:name}).exec((err, surveys) => {
    // error checking
    if (err || !surveys) {
      return res.status(400).json({
        error: `Something went wrong in finding ${name}  surveys`,
      });
    }
    // return all the todos in json format
    req.survey=surveys;
    // res.json(surveys);
    next();
  });
});

router.get('/mario',(req,resp)=>{
  resp.send(marioModel.mariochar)
});


//to read all surveys to render on login
router.get('/surveys',  (req, res) => {
    UserSurvey.find().sort("-createdAt")
    .exec((err, surveys) => {
      // error checking
      if (err || !surveys) {
        return res.status(400).json({
          error: "Something went wrong in finding all surveys",
        });
      }
      // return all the todos in json format
      res.json(surveys);
    });
});


//not finished******************************************
router.get('/surveys/:name',(req,res)=>{
    res.json(req.survey)
});

router.delete('/surveys/:name/delete',(req,res)=>{
  const survey=req.survey[0];
  // console.log(survey)
  survey.remove((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: "something went wrong while deleting the category",
      });
    }
    // send deleted todo and success message as a json response
    res.json({
      deleted: survey,
      message: "survey deleted successfully!",
    });
  })
});


//a user can only update survey name,description and other crietria

router.put('/surveys/:name/update',(req,res)=>{
  const survey=req.survey[0];
  survey.name=req.body.name;
  survey.description=req.body.description;
  survey.otherCrietria=req.body.otherCrietria;

  survey.save((err, t) => {
    if (err || !t) {
      return res.status(400).json({
        error: "something went wrong while updating",
      });
    }
    // send the updated todo as a json response
    res.json(t);
  });
})

//********************************************************* */


  


module.exports = router;