const express = require('express');
const app = express();

app.use(express.static('../method-public'));

app.listen(5000, () => {
    console.log('Server running');
})