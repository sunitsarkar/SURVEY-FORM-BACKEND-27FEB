const express = require('express');

const router = express.Router();
const Question = require('../model/createQuestion.js')


// to create
router.post('/create', (req, res) => {
    const question = new Question(req.body);
    question.save((err, success) => {
        res.send(success)
    })
})






module.exports = router;