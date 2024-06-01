const fs = require('fs');
const http = require('http');
// const port = 3200;
const server = http.createServer();
// server.on('request', (req, res) => {
//     fs.readFile('myfile.txt', (err, data) => {
//         if (err) {
//             res.end('<h1> Cannot get data </h1>')
//             console.log(err);
//         } else
//             res.end(data.toString())
//     })
// })

// now performing a live stream reading
server.on('request', (req, res) => {
    const readstream = fs.createReadStream('myfile.txt');
    readstream.on('data', (datachunk) => {
        res.write(datachunk.toString())
    })
    readstream.on('end', (e) => {
        res.end('<h1>eroor here</h1>')
    })

})
server.listen(port, () => {
    console.log(`server is listening at ${port}`);
})