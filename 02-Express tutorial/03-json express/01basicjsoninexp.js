const express = require('express');
const app = express();
const{products,people} = require('../data');

app.get('/',(req,res)=>{
    res.status(200).send('Hello world');
})

app.get('/json',(req,res)=>{
    // res.json([{name:'itachi Uchiha'},{name:'izumi uchiha'}]);
    res.json(people)
})

app.use('*',(req,res)=>{
    res.status(404).send('404 page not found');
})

app.listen(5000,()=>{
    console.log('Server listening on 5000')
})