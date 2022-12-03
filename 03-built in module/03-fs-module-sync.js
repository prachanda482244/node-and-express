const fs = require('fs');
const {readFileSync,writeFileSync,appendFileSync} = fs;
const path = '../0content/first.txt'
const path2 = '../0content/second.txt'
const first =readFileSync(path,'utf8');
const second =readFileSync(path2,'utf8');

console.log(first);
console.log(second);
 
// WriteFilesync will create a file if its not there and overwrite if the file is exist
const newPath = '../0content/result-sync.txt';
writeFileSync(newPath,
`${first} ${second}`,'utf8',
);
appendFileSync(newPath,' bachhi','utf8');