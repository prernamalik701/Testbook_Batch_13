const url = require('url');
// const urlstring = "https://www.example.com/datafile.txt";

const urlstring = "https://www.example.com/path?query=valu#eid";
const data = url.parse(urlstring, true).query;
console.log(data);