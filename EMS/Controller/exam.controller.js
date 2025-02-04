const Exam = require("../Model/exam.model");


const createExam=async (req, res) => {
    const exam=await Exam.create(req.body);
    req.body.createdBy=req.user.id;
    res.status(201).send('Exam Created',exam);
};

const getExam=async (req, res) => {
    const exams = await Exam.find().populate('questions');
    res.json(exams);
};
module.exports={createExam, getExam};
