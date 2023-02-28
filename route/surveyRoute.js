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


//to read
router.get('/survey',  (req, res) => {
    try {
        const survey = new UserSurvey.find();
        res.status(200).json(survey);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//to update
router.put('/survey/:name/:question',  (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        const survey = new UserSurvey.findByIdAndUpdate({name: name, question: question});
        if (!survey) {
            return res.status(404).json({ message: "Survey not found" });
        }
        res.status(200).json(survey);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// to delete
router.delete('/survey/:name/:question', async (req, res) => {
    const name = req.params.name;
    const question = req.params.question;
    try {
      const survey = await UserSurvey.findOneAndDelete({ name: name, question: question });
      if (!survey) {
        return res.status(404).json({ message: "Survey not found" });
      }
      res.status(200).json({ message: "Survey deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

/*
this is to store the user data when one tries to registrer.....soo we need only one methode that is post.
*/

module.exports = router;