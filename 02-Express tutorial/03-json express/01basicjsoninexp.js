const express = require('express');
const app = express();
const { products, people, message } = require('../data');

app.get('/', (req, res) => {
    res.status(200).send('<h1>Home page <a href="/bachhi">love</a> <a href="/api/products">Products</a></h1>')
})

app.get('/json', (req, res) => {
    // res.json([{name:'itachi Uchiha'},{name:'izumi uchiha'}]);
    res.json(people)
})

app.listen(5000, () => {
    console.log('Server listening on 5000')
})