const express = require('express');
const app = express();
const{products,people} = require('../data');

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Home page <a href="/bachhi">love</a> <a href="/api/products">Products</a></h1>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,price} = product
        return {id, name, price}
    })
    res.json(newProducts)
})
app.get('/json',(req,res)=>{
    // res.json([{name:'itachi Uchiha'},{name:'izumi uchiha'}]);
    res.json(people)
})

app.get('/bachhi',(req,res)=>{
    res.status(200).send('<h1>I love you maya ❤️</h1> <a href="/">Go back</a>')
})

app.use('*',(req,res)=>{
    res.status(404).send('<h1>404 page not found</h1>');
})

app.listen(5000,()=>{
    console.log('Server listening on 5000')
})