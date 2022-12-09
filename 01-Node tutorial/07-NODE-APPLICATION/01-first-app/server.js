const http = require('http');
const {readFileSync} = require('fs');

const server = http.createServer();
const htmlPath = './index.html';
const cssPath = './style.css';

const homepage = readFileSync(htmlPath,'utf-8');
const homepageCss = readFileSync(cssPath,'utf-8');
server.on('request',(req,res)=>{
    const url = req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homepage);
        res.end();
    }
    else if(url==='/style.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homepageCss);
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('404 not found');
        res.end();    
    }
});
server.listen(5000);
