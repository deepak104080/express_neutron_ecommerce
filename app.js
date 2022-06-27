const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
// app.use(cors());

app.get('/', (req, resp) => {
    resp.send('<h2>My Express server has started.</h2>');
    console.log(colors.blue('My Express server has started.', new Date()))
})

app.get('/about', (req, resp) => {
    console.log(colors.blue('My Express server has started.'))
    resp.send('About Page...')
})

app.get('/services', (req, resp) => {
    resp.send('services Page...')
    console.log(colors.blue('My Express server has started.'))
})

app.get('/data', (req, resp) => {
    const tempObj = {
        name: 'test name',
        age: 123,
        status: false
    }
    resp.send(tempObj)
    console.log(colors.blue('My Express server has started.'))
})

const productsRoute = require('./routes/products');
app.use('/products', productsRoute);

// const usersRoute = require('./routes/products');
// app.use('/users', productsRoute);

// const cartsRoute = require('./routes/products');
// app.use('/carts', productsRoute);

// const ordersRoute = require('./routes/products');
// app.use('/orders', productsRoute);


app.listen(4000);

