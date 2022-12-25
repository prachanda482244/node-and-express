// Middleware are the functios that execute during the request to the server each middleware functions has access to request and response object and when it comes to functonality sky is the limit. It is the heart and soul of the express.

const express = require('express');
const app = express();
const logger = require('./02-logger');
// req => middleware =>res


app.get('/', logger, (req, res) => {
    res.status(200).send('Home page')
})


app.get('/about', logger, (req, res) => {
    res.status(200).send('ABout page')
})
app.get('/contact', logger, (req, res) => {
    res.status(200).send('Contact')
})

app.listen(5000, () => {
    console.log('Server running');
})