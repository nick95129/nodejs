const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt');


const base = path.basename(filePath);
console.log("base " + base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'tesxt.txt');

console.log(absolute);
