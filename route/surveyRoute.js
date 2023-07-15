const express = require('express');
const router = express.Router();
const UserSurvey = require('../model/userSurvey');
const auth=require('../middleware/auth');


// to create 
router.post('/create',auth, (req, res) => {
    const survey = new UserSurvey(req.body);
    survey.save((err, success) => {
        res.send({ success })
    })
});



router.param("id", (req, res, next, id) => {
  UserSurvey.find({_id:id}).exec((err, surveys) => {
    // error checking
    if (err || !surveys) {
      return res.status(400).json({
        error: `Something went wrong in finding surveys`,
      });
    }
    // return all the todos in json format
    req.survey=surveys;
    // res.json(surveys);
    next();
  });
});


//to read all surveys to render on login
router.get('/surveys', auth, (req, res) => {
  const ref=req.query.ref;
    UserSurvey.find({ref:ref}).sort("-createdAt")
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
router.get('/surveys/:id',(req,res)=>{
    res.json(req.survey)
});

//delete
router.delete('/delete', (req, res) => {
  const id = req.query.id;
  UserSurvey.deleteOne({ _id: id })
    .then(() => {
      res.status(204).send('deleted');
    })
    .catch((error) => {
      res.status(404).send({ error: "There is no such product id" });
    });
});

//a user can only update survey name,description and other crietria

router.put('/surveys/:id/update',(req,res)=>{
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