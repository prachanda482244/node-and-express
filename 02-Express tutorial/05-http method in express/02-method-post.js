const express = require('express');
const app = express();

// app.use(express.static('../02Express-Application/public'));
app.use(express.static('../method-public'))

// parse form data
app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

app.listen(5000, () => {
    console.log('Server is running');
})