const express = require('express');
const app = express();
const path = require('path');

// Setting up static file and middleware
app.use(express.static('./public'));

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./public/index.html'));
// adding to public assets
// SSR - SERVER SIDE RENDERING
// })

app.listen(5000,()=>{
    console.log('Server running');
})