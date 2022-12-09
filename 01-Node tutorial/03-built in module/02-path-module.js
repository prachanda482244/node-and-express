const path  = require('path');

console.log(path.sep);

const filePath = path.join('/0content/','subfolder','text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'../0content','subfolder','test.txt');
console.log(absolute);
console.log(path.extname(absolute))