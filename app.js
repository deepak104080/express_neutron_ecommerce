const express = require('express');
const colors = require('colors');

const app = express();


app.get('/', (req, resp) => {
    resp.send('<h2>My Express server has started.</h2>')
    console.log(colors.blue('My Express server has started.'))
})


app.listen(4000);