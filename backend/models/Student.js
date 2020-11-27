const mongoose = require('mongoose');
const students = require('../students')
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    id:{
         type: String,
         required: true
    },
    full_name:{
        type: String,
        required: true
    } ,
    img:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    grade:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Student', studentSchema)