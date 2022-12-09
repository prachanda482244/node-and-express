const http = require('http');
const {readFileSync} = require('fs');
const port = 5000;
const server = http.createServer();
const homePage = readFileSync('./index.html','utf-8');
server.on('request',(req,res)=>{
    // req object
    const url = req.url;
    // const method = req.method;
    
    // homepage
    if(url==='/'){

    // res object
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage);
        res.end();
    }
    // about
    else if(url==='/about'){

    // res object
        res.writeHead(200,{'content-type':'text/html'});
        res.write('');
        res.end();
    }
    // 404
    else{

    // res object
        res.writeHead(404,{'content-type':'text/html'});
        res.write('');
        res.end();
    }


});

server.listen(port);