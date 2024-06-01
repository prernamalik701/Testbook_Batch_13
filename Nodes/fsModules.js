// // 
const fs = require('fs');
// fs.readFile('myfile.txt', 'utf-8', (err, data) => { //convert into string require utf-8
//     console.log(data);
// })
// const fs = require('fs');
// fs.readFile('myfile.txt', (err, data) => { //using to String in place of utf-8
//     console.log(data.toString());
// })
// console.log('finished reading'); // this is a asynchronous method to read file

// const fs = require('fs');
// const data = fs.readFileSync('myfile.txt') //using to String in place of utf-8
// console.log(data.toString());

// console.log('finished reading'); // read file synchronously

//now we are using for loop to read multiple files

// const files = ['myfile.txt'];
// files.forEach((files) => {
//     const data = fs.readFileSync(file, 'utf-8');
//     console.log('contents to file ${file}');
//     console.log(data);
//     console.log('----------');
// })

const files = ['myfile.txt'];
for (let file of files) {
    const data = fs.readFileSync(file, 'utf-8');

    console.log(data);
    console.log('----------'); // now iterate through for loop
}