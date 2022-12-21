const express = require('express');
const app = express();
const { products, people, message } = require('../data');

app.get('/', (req, res) => {
    res.status(200).send('<h1>Home page <a href="/bachhi">love</a> <a href="/api/products">Products</a></h1>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, price } = product
        return { id, name, price }
    })
    res.json(newProducts)
})
app.get('/json', (req, res) => {
    // res.json([{name:'itachi Uchiha'},{name:'izumi uchiha'}]);
    res.json(people)
})

// route params
app.get('/api/product/:productId', (req, res) => {
    const { productId } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId))
    if (!singleProduct) {
        return res.status(404).send('Product not found')
    }
    res.json(singleProduct)
    // console.log(singleProduct);
})

app.get('/message/:messageId', (req, res) => {
    const { messageId } = req.params;
    const msgs = message.find((msg) => msg.id === Number(messageId))
    if (!msgs) {
        return res.status(404).send('404 message not found')
    }
    res.send(msgs.name + ' I love you <3')
    res.json(msgs);
})


// Extra params
app.get('/api/product/:productId/review/:reviewId', (req, res) => {
    // console.log(req.params)
    res.send('Hello world and dummy data')
})

app.get('/bachhi', (req, res) => {
    res.status(200).send('<h1>I love you maya ❤️</h1> <a href="/">Go back</a>')
})

app.use('*', (req, res) => {
    res.status(404).send('<h1>404 page not found</h1>');
})

app.listen(5000, () => {
    console.log('Server listening on 5000')
})