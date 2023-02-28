const mongoose=require('mongoose');
/*
work on it..
*/
const Question=mongoose.Schema({
    question: String,
    options:[
        {one: String},
        {two: String},
        {three: String}
    ]
});

module.exports=mongoose.model("Question" ,Question);