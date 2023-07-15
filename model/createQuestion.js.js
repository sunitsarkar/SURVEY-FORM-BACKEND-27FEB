const mongoose=require('mongoose');
/*
work on it..
*/
const Question=mongoose.Schema({
    surveyName:String,
    question: String,
    options:String
});

module.exports=mongoose.model("Question" ,Question);