const fs = require('fs');
var ignore = ['myfile.txt'];

function readFileData(...filepaths) {
    // console.log(filepaths);
    filepaths.forEach((filepath) => {
        try {
            const filecontents = fs.readFileSync(filepath, 'utf-8');
            console.log(filecontents);
        } catch (e) {
            console.log(e);
        }
    })
}
readFileData('myfile.txt');