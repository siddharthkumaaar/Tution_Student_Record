const express = require('express')
const mongoose = require('mongoose')
const students = require('./students')
const cors = require('cors')

const Student = require('./models/Student')

const app = express()

app.use(cors())

mongoose.connect('mongodb://localhost/studentsdata',{
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
}, (err)=>{
    if(err){
        console.log('error connecting the database' + err)
    }
    else
    {
        console.log('Successfully connected to the database')
    }
})

const db = mongoose.connection;

db.once('open', async () => {
    if((await Student.countDocuments().exec()) > 0){
        return;
    }
    Student.insertMany(students).then((res)=> res.json('Students added successfully')).catch(err => res.status(400).json('Error: ' + err))
})

app.get('/students',async (req,res)=>{
    const page = Number.parseInt(req.query.page)
    const limit = Number.parseInt(req.query.limit)

    const startIndex = (page - 1) * limit;
    const endIndex =  page * limit;

    const results = {};

    if(endIndex < await Student.countDocuments().exec()){

        results.next = {
            page: page + 1,
            limit: limit
        }
    }

    if(startIndex > 0){

        results.prev = {
            page: page - 1,
            limit: limit
        }
    }

    // results.current = stt.slice(startIndex,endIndex)
    // res.json(results)
    
    // results.current = users.slice(startIndex, endIndex);
    try{
        results.current = await Student.find().limit(limit).skip(startIndex).exec();
        res.json(results)
    } catch (err){
        res.status(400).json({ message: err.message })
    }
})

app.listen(5000,()=>{
    console.log('The server is up and running')
})