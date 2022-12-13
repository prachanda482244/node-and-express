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
// checking for 404 error
app.all('*',(req,res)=>{
    res.status(404).send('404 page not found')
})

app.listen(5000,()=>{
    console.log('Server is listening on 5000')
});