const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    options: [String],
    correctAnswer: { type: String, required: true },
    examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;