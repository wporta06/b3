const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({
        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            required: true
        },
        password: {
            type: 'string',
            required: true
        },
        role: {
            type: 'string',
            default: "user"
        },

    }, { timestamps: true }) //{ timestamps: true } for add time

const Auth = mongoose.model('Auth', authSchema);
module.exports = Auth;












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