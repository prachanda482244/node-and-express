const express = require('express');
const app = express();

const authorize = require('./02-authorize');
const logger = require('./02-logger');

const morgan = require('morgan');

// 1. use vs route
// 2. options - our own / express / third party

// own middleware
// app.use([logger,authorize]);

// express middleware
// app.use(express.static('../02Express-Application/public'));

// third party middle ware
app.use(morgan('tiny'));

app.get('/',(req,res)=>{
    res.status(200).send('home')
})

app.get('/about',(req,res)=>{
    res.status(200).send('about')
})
app.get('/api/products',authorize,(req,res)=>{
    res.status(200).send('products')
})

app.get('/api/items',[logger,authorize],(req,res)=>{
    res.status(200).send('items')
})

app.listen(5000);