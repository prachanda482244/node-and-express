const http = require('http');
const server = http.createServer();

// Content-type - text/html,text/json,text/plain , image/svg+xml

server.on('request',(req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Home page</h1>');
    res.end()
});

server.listen(5000)
