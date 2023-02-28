const mongoose=require('mongoose');
/*
work on it..
*/
const Question=mongoose.Schema({
    question: String,
    options1:[
        {one: String},
    ],
    options2:[
        {two: String},
    ],
    options3:[
        {three: String},
    ]
});

module.exports=mongoose.model("Question" ,Question);