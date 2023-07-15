const express = require('express');

const router = express.Router();
const Question = require('../model/createQuestion.js');
const auth=require('../middleware/auth');


// to create
router.post('/create', (req, res) => {
    const question = new Question(req.body);
    question.save((err, success) => {
        res.send(success)
    })
});

//to get all question
router.get("/questions",(req,res)=>{
   const name=req.query.name;
   Question.find({surveyName:name}).then((result)=>{
    // console.log(result)
    res.json(result)
})
})


module.exports = router;