
// npm
// sudo npm install -g package_name


const {readFile, writeFile} = require('fs').promises;
const util = require('util');

// const readFile = util.promisify(readFile);
// const writeFile = util.promisify(writeFile);

const start = async () => {
    try {
       const first = await readFile('./content/first.txt','utf8');
       const second = await readFile('./content/second.txt', 'utf8');
       await writeFile('./content/result-mind-grenade.txt', `This is awesome: ${first} ${second}`)
       console.log(first, second);   
    } catch(error) {
        console.log(error);
    }
  
}

start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err)
//                 reject(err);
//             else{
//                 resolve(data);
//             }
//         }) ;
//     });
// }

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch((err)=> console.log(err));

// const start = async () => {
//     try {
//        const first = await getText('./content/first.txt');
//        const second = await getText('./content/second.txt');
//        console.log(first);   
//         console.log(second);   
//     } catch(error) {
//         console.log(error);
//     }
  
// }

// start();
// const start = async () => {
//     try {
//        const first = await readFilePromise('./content/first.txt','utf8');
//        const second = await readFilePromise('./content/second.txt', 'utf8');
//        await writeFilePromise('./content/result-mind-grenade.txt', `This is awesome: ${first} ${second}`)
//        console.log(first, second);   
//     } catch(error) {
//         console.log(error);
//     }
  
// }

// const {readFile, writeFile} = require('fs');

// readFile('./content/first.txt','utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const first = result;

//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const second = result;
//         writeFile('./content/result-async.txt', `Here is the results: ${first}, ${second}`, (err, result) => {
//             if(err) {
//                 console.log(err);
//                 return;
//             }
//             console.log(result);
//         });
//     });
// });
