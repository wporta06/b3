const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
        question: {
            type: 'string',
            required: true
        },
        answer: [],
        corectanswer: [],
    }, { timestamps: true }) //{ timestamps: true } for add time

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;

// questions: [
//     {
//       "question": "ssssssssssssssss",
//       "answer": [
//         "sdsdsd",
//         "aaaaa",
//         "wwwwww",
//         "lklllll",
//         "pppppp"
//       ],
//       "correctindex": "2",
//       "id": 3
//     },