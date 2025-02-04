const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
    title:String,
        
   
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Exam=mongoose.model('Exam',ExamSchema);
module.exports = Exam;
