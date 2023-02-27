const express = require('express');

const router = express.Router();
const user = require('../model/user');

router.post('/', () => {

})

/*
this is to store the user data when one tries to registrer.....soo we need only one methode that is post.
*/



// Implement the POST API - to creating the new survey
router.post("/surveys", (req, res) => {
    const survey = req.body;
    // save the survey to the database
    res.send("Survey created successfully!!");
});


// GET API for existing survey
router.get("/surveys:id", (req, res) => {
    const surveyId = req.params.id;
    // fetch the survey from the database using the surveyId
    const survey = { id: surveyId, title: 'Sample survey', questions: [] };
    res.send(survey);
});


