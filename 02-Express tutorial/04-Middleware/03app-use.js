// Middleware are the functios that execute during the request to the server each middleware functions has access to request and response object and when it comes to functonality sky is the limit. It is the heart and soul of the express.

// req => middleware =>res

const express = require('express');
const app = express();
const logger=require('./02-logger');
// app.use(logger);
app.use('/api',logger);
// Only used for api used url

app.get('/', (req, res) => {
    res.status(200).send('Home page')
})

app.get('/about',  (req, res) => {
    res.status(200).send('ABout page')
})
app.get('/contact',(req,res)=>{
    res.status(200).send('Contact')
})

app.get('/api/bachhi',(req,res)=>{
    res.send('Maya maya');
})

app.get('/api/items',(req,res)=>{
    res.send('Items');
})
app.all('*',(req,res)=>{
    res.status(404).send('404 not found')
})

app.listen(5000, () => {
    console.log('Server running');
})