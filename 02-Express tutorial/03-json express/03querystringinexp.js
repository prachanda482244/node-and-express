const express = require('express');
const app = express();
const { products, people, message } = require('../data');

app.get('/', (req, res) => {
    res.status(200).send('Hello world');
})

app.get('/api/v2/query', (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search.toUpperCase());
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('No products matched your seaarch')
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProducts)
    res.send('Hello world')
})

app.listen(5000, () => {
    console.log('server running on port');
})