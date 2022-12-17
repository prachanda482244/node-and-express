const express = require('express');
const app = express();

// Method of express server
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.get('/',(req,res)=>{
    // res.end('Hello world');
    res.status(200).send('Hello world')
});

app.get('/about',(req,res)=>{
    res.status(200).send('About page')
})

// love
app.get('/bachhi',(req,res)=>{
    res.status(200).send('<h2>Hello  bachhi</h2>')
})

// checking for 404 error
app.all('*',(req,res)=>{
    res.status(404).send('404 not found')
})

// server
app.listen(5000,()=>{
    console.log('Server is listening on 5000')
});