const express = require('express');
const app = express();
const upload = require('express-fileupload');

app.use(upload());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/myfile.txt')
})

app.listen(4500, () => {
    console.log('listening');
})