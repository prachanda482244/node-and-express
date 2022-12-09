const http = require('http');

// As usual

// const server = http.createServer((req,res)=>{
//     res.end('Welcome');
// })

// Using event emitter API
const server = http.createServer();

// emits request event
// subscribe to it / listen for it /respond to it
 server.on('request',(req,res)=>{
    if(req.url==='/'){
        res.end('Welcome');
    }
    if(req.url==='/about'){
        res.end('About')
    }
 })
 server.listen(5000);