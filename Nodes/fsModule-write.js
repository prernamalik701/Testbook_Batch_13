// const fs = require('fs');
// fs.writeFile('myfile.txt', 'how are you ? whether you are fine or not with the Modules', (err, data) => {
//     console.log(data);

// });

// const fs = require('fs');
// fs.writeFileSync('myfile1.txt', 'how are you ? whether you are fine or not with the Modules', (err, data) => {
//     console.log(data);

// });
// const fs = require('fs');
// fs.appendFile('myfile1.txt', 'how are you ? whether you are fine or not with the Modules', (err, data) => {
//     console.log(data);

// }); //prevent data from overdide

// const fs = require('fs');
// fs.mkdir('datafile', () => {
//     console.log('creating a folder');
// })

// const fs = require('fs');
// fs.rmdir('datafile.txt', () => {})

// const fs = require('fs');
// fs.unlink('myfile.txt', () => {})// to delete the file.txt
// const fs = require('fs');
// fs.rename('myfile1.txt', 'myfile.txt', () => {})


// const fs = require('fs');
// for (let i = 0; i <= 10; i++) {
//     fs.writeFileSync(`myfile1-${i}.txt`, `this is my file-${i} data`) // create .txt file upto given sequence
// }


const fs = require('fs');
fs.writeFileSync(`Emp_details.csv`, `Emp_name\njohn,doe,Emp_id\n 1,2`) // creae .csv file