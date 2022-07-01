const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


router.get('/', (req, resp) => {
    const productsList = [
        {
            name: 'product 1',
            id: 123
        }, 
        {
            name: 'product 2',
            id: 1234
        }, 
        {
            name: 'product 3',
            id: 1235
        }
    ]
    console.log('products sent.....');
    resp.send(productsList);
})


router.post('/', async (req, resp) => {
    try{
        console.log('req - body - ', req.body);
        //store data in database
        const tempObj = new Product({
            id: req.body.productid,
            title: req.body.productname,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category,
        })

        const response = await tempObj.save();
        console.log(response);
        resp.status(201).json(response);
        //resp.send('api success...', response);
    }
    catch(err){
        //resp.send('api failed...');
        resp.status(400).json({message: err.message});
    }
})
//add product - productid, name, price, description, image, category

// router.get('/productdetails', (req, resp) => {
//     console.log('products details sent.....');
//     resp.send('products details sent.....');
// })


router.get('/productdetails2', (req, resp) => {
    //const temp = req.params.id;
    const temp2 = req.query.id;
    console.log(req.query);
    console.log('products details sent.....', req.query.id);
    resp.send('products details sent.....');
})


router.get('/productdetails3/:id', (req, resp) => {
    const temp = req.params.id;
    console.log('products details sent.....', req.params.id);
    resp.send('products details sent.....');
})


router.delete('/', (req, res) => {
    console.log('delete ');
})


router.put('/', (req, res) => {
    console.log('updated.... ');
    res.send('products details updated.....');
})


module.exports = router;