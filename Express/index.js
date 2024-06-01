const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.send('<h1>hello from this page</h1>')
})
app.listen(4500, () => {
    console.log('server is listening');
})