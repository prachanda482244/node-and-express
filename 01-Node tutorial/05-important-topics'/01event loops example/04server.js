const http = require('http');
const port = 5000;

const server = http.createServer((req,res)=>{
    console.log('request event');
    res.end('Hello world');
});
server.listen(port,()=>{
    console.log(`server is running on ${port}`);
});
