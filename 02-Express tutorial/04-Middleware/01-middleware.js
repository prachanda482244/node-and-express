// Middleware are the functios that execute during the request to the server each middleware functions has access to request and response object and when it comes to functonality sky is the limit. It is the heart and soul of the express.

const express = require('express');
const app = express();

// req => middleware =>res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const timer = new Date().getFullYear();
    console.log(method, url, timer)
    // res.send('Testing')
    next();
}
app.get('/', logger, (req, res) => {
    res.status(200).send('Home page')
})


app.get('/about', logger, (req, res) => {
    res.status(200).send('ABout page')
})

app.listen(5000, () => {
    console.log('Server running');
})