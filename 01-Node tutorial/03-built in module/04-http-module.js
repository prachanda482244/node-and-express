const http = require('http');
// const server = http.createServer((req,res)=>{
//     console.log(req);
//     if(req.url==='/'){
//         res.end('Hello world from homepage');
//     }else if(req.url==='/about'){
//         res.write('Hello from about ')
//         res.end()
//     }else{
//         res.end('404 not found');
//     }
// })
// server.listen(5000);

console.log(http.METHODS);
