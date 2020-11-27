const express = require('express')
// const mongoose = require('mongoose')
const students = require('./students')

// const Student = require('./models/Student')

const app = express()

// mongoose.connect('mongodb://localhost/studentsdata',{
//     useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
// }, (err)=>{
//     if(err){
//         console.log('error connecting the database' + err)
//     }
//     else
//     {
//         console.log('Successfully connected to the database')
//     }
// })

// const db = mongoose.connection;

// db.once('open', async () => {
//     if((await Student.countDocuments().exec()) > 0){
//         return;
//     }
//     Student.insertMany(students).then((res)=> res.json('Students added successfully')).catch((err) => console.log(err))
// })

app.get('/users',(req,res)=>{
    const page = Number.parseInt(req.query.page)
    const limit = Number.parseInt(req.query.limit)

    const startIndex = (page - 1) * limit;
    const endIndex =  page * limit;

    const results = {};

    if(endIndex < students.length){

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

    results.current = students.slice(startIndex,endIndex);
    res.json(results)
    
    // results.current = users.slice(startIndex, endIndex);
    // try{
        // results.current = students.slice(startIndex, endIndex);
        // res.json(results)
    // } catch (err){
    //     res.status(400).json({ message: err.message })
    // }
})

app.listen(5000,()=>{
    console.log('The server is up and running')
})