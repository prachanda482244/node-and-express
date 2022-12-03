const fs = require("fs");
const { readFile } = fs;
const path1 = "./files/first.txt";
const path2 = "./files/second.txt";
const greet = require('./love');
const name = require('./name');

readFile(path1, "utf8", (err, data) => {
  if (!err) {
    const que = data;
    readFile(path2,'utf8',(err,data)=>{
        if(!err){
            console.log(que);
            setTimeout(() => {
                console.log(data);
            }, 2000);
        }
    })
  }
});
setTimeout(() => {
   console.log(greet(name.her));
}, 4000);