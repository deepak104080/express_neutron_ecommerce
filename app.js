const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
// express.json();
// express.urlencoded();
// app.use(cors());

app.use(cors());

const reqFilterAge = require('./middleware/middleware_age');
// app.use(reqFilterAge);


app.get('/', (req, resp) => {
    resp.send('<h2>My Express server has started.</h2>');
    console.log(colors.blue('My Express server has started.', new Date()))
})

app.get('/about', reqFilterAge, (req, resp) => {
    console.log(colors.blue('My Express server has started.'))
    resp.send('About Page...')
})

app.get('/services', reqFilterAge,  (req, resp) => {
    resp.send('services Page...')
    console.log(colors.blue('My Express server has started.'))
})

app.get('/data', (req, resp) => {
    const tempObj = {
        name: 'test name',
        age: 123,
        status: false
    }
    resp.set({
        'Content-Type': 'text/json'
    })
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
const path = require('path');
const { reset } = require('nodemon');
const { default: mongoose } = require('mongoose');
const publicpath = path.join(__dirname, 'public');
app.use(express.static(publicpath));

app.get('/staticfile', (req, res) => {
    res.sendFile(`${publicpath}/staticfile1.html`);
})
app.get('/staticabout', (req, res) => {
    res.sendFile(`${publicpath}/staticfile2.html`);
})
app.get('/staticservices', (req, res) => {
    res.sendFile(`${publicpath}/staticfile3.html`);
})
app.get('/staticcontact', (req, res) => {
    res.sendFile(`${publicpath}/staticfile4.html`);
})



app.set('view engine', 'ejs');

//http://myapi.com
app.get('/ejsabout', (req, res) => {
    const data = {
        name: 'test',
        city: 'tets city',
        pincode: 123123
    }
    //data will be coming from model - database
    // res.set({
    //     'Content-Type': 'text/html',
    //     'Access-Control-Allow-Origin': '*'
    // })
    res.render('ejsabout', {data});
})
app.get('/ejsservices', (req, res) => {
    res.render('ejsservices');
})
app.get('/ejscontact', (req, res) => {
    res.render('ejscontact');
})


mongoose.connect('mongodb+srv://testuser001:z9xsFuktzYAs4fMk@cluster0.2eq41.mongodb.net/ecommerce_ns?retryWrites=true&w=majority', ()=> {
    console.log(colors.yellow('MongoDB connected...'))
})

//hostname, database, user, password

app.listen(4000);

