const Question = require("../Model/question.model");

const createQuestion=async(req,res)=>{
    const question=await Question.create(req.body);
    res.status(201).json(question);
};

module.exports = {createQuestion};