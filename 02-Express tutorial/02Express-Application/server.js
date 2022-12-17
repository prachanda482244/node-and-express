const express = require('express');
const app = express();
const path = require('path');

// setup static and middleware
app.use(express.static('./public'));

app.get('/',(req,res)=>{
    // when the index.html file is outside of the public folder
    res.sendFile(path.resolve(__dirname,'./index.html'));
})


// error
app.all('*',(req,res)=>{
    res.status(404).send('404 page not found');
})

// server
app.listen(5000,(req,res)=>{
    console.log('server listening');
})