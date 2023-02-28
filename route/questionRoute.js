const express=require('express');


const router=express.Router();
const Question=require('../model/createQuestion.js')

router.post('/create',(req,res)=>{
    const quuestion=new Question(req.body);
    quuestion.save((err,success)=>{
        res.send(success)
    })
})

module.exports=router;