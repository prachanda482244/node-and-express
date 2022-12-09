const http = require('http');
const server = http.createServer();

server.on('request',(req,res)=>{
    // Request object
    let url = req.url;
    console.log(url);

    // Homepage
    if(url==='/'){

         // Response object
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Home page</h1>')
        res.end();

    }
    // About
    else if(url==='/about'){

       // Response object
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Abput page-</h1>')
        res.end();
    }
    // 404
    else{
        
    // Response object
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>404 not found</h1>')
    res.end();
    }
});
server.listen(5000);