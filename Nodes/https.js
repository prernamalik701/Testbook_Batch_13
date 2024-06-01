// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end('< h1 > your google page < /h1>')
// })
// server.listen(3200);

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('< h1 > your home page < /h1>')
    } else
    if (req.url == '/about') {
        res.end('< h1 > your about page < /h1>')
    } else
    if (req.url == '/contacts') {
        res.end('< h1 > your contacts page < /h1>')
    }

})
server.listen(3200);