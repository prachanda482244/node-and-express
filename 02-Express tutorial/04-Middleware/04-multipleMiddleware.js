const express = require('express');
const app = express();

// middlewares
const logger = require('./02-logger');
const authorize = require('./02-authorize');

// using middlewares
app.use([logger,authorize]);

// Home page
app.get('/',(req,res)=>{
    res.send('Homepage')
})

// about page
app.get('/about',(req,res)=>{
    res.send('ABout page')
})

// api-products
app.get('/api/products',(req,res)=>{
    res.send('Products');
})

// api - items
app.get('/api/items',(req,res)=>{
    console.log(req.users);
    res.send('items')
})

// 404
app.all('*',(req,res)=>{
    res.status(404).send('404 not found');
})

// server
app.listen(5000,()=>{
    console.log('Server running')
})