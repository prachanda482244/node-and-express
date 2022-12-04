const {readFile} = require('fs');
const path = '../0content/first.txt';
console.log('Started a first task');

//event loop is a async version which execute the important code first and hold the code which takes long time to execute 
readFile(path,'utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log('completed first task');
});
console.log('start next task');
