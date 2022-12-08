const fs = require('fs');
const {createReadStream}= fs;
const path = '../../0content/big-data.txt';

// default 64kb
// last buffer - remainder
// highWaterMark - control size , number of data returns  
// const stream = createReadStream(path,{highWaterMark:20 });
// const stream = createReadStream(path,{encoding:'utf-8});


const stream = createReadStream(path,{
    highWaterMark:2000,
    encoding:'utf-8'
});
stream.on('data',(data)=>{
    console.log(data);
})
stream.on('error',(err)=>console.log(err));