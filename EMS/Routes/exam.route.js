const {Router}=require('express');
const isToken = require('../Middleware/auth');
const { createExam, getExam } = require('../Controller/exam.controller');

const examRouter=Router();

examRouter.post("/create",isToken(['teacher']),createExam);
examRouter.get("/",isToken(['teacher', 'student']),getExam);

module.exports=examRouter;