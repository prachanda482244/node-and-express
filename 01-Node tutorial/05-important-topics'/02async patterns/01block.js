const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('Home page');
}
if(req.url==='/about'){
    // Blocking code.....!!!
    for(i=0;i<10;i++){
        for(j=0;j<10;j++){
            console.log(`${i} ${j}`);
        }
    }
    res.end('About page');
}
if(req.url==='/aasish'){
    res.end('<h1>Aasish </h1>');
}
res.end('Error page');
})
server.listen(5000,()=>{ 
    console.log('server is listening on 5000')
})
