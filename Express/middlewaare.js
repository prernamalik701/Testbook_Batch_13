const express = require('express');
const app = express();
const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('<h1>plez enter the age again</h1>')
    } else {

    }
}
app.use(reqFilter)
app.get('/', (req, res) => {
    res.send('<h1>hello from this page</h1>')
})

app.listen(3600, () => {
    console.log('server is listening here');
})