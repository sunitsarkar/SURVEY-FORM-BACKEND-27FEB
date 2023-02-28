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


// to read
router.get('/', async (req, res) => {
    try {
        const question = await Question.findOne({ name: req.query.name, question: req.query.question });
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }
        res.status(200).json(question);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// to Update
router.patch('/', async(req, res) => {
    try {
        const question = await Question.findOneAndUpdate({ name: req.query.name, question: req.query.question }, req.body, { new: true });
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }
        res.status(200).json(question);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// to delete
router.delete('/', async (req, res) => {
    try {
        const question = await Question.findOneAndDelete({ name: req.query.name, question: req.query.question });
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }
        res.status(200).json({ message: "Question deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;