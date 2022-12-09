const fs = require('fs');
const {readFile,writeFile,appendFile} = fs;

const path1 = '../0content/first.txt';
const path2 = '../0content/second.txt';
const newPath = '../0content/result-async.txt';

// Callback Hell
readFile(path1,'utf8',(err,data)=>{
    if(!err){
        console.log(data);
        const first = data;
        readFile(path2,'utf8',(err,data)=>{
            if(!err){
                const second =data;
                writeFile(newPath,`${first} ${second}`,'utf-8',(err,data)=>{
                    if(!err){
                        appendFile(newPath,' bachhi','utf-8',(err,data)=>{
                            console.log('data append');
                        })
                    }
                })
            }
        })
    }
    // err?console.log(err):console.log(data);
})
console.log('Print first')