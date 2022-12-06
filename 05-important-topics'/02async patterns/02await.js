const fs = require('fs');
const {readFile,writeFile}= fs.promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const path1 = '../../0content/first.txt';
const path2 = '../../0content/second.txt';
const path3 = '../../0content/writeAwait.txt';

const start = async()=>{
    try {
        const first = await readFile(path1,'utf8');
        const second = await readFile(path2,'utf8');

        // const first = await readFilePromise(path1,'utf8');
        // const second = await readFilePromise(path2,'utf8');
        console.log(first, second);
        await writeFile(path3,`${first} ${second} from await js`);
    } catch (error) {
        console.log(error);
    }
}
start();


// Promises....

// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }

// getText(path1)
// .then((txt)=>console.log(txt))
// .catch((err)=>console.log(err));

// getText(path2)
// .then((txt)=>console.log(txt))
// .catch((err)=>console.log(err));
