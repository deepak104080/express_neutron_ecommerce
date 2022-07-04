const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


router.get('/', async (req, resp) => {
    console.log('main api....');
    try{
        const response = await Product.find();
        console.log(response);
        resp.status(200).json(response);
    }
    catch {

    }
})


router.get('/:id', async (req, resp) => {
    console.log('details api....');
    try{
        const tempid = req.params.id;
        const response = await Product.findOne({'id': tempid});
        console.log(response);
        resp.status(200).json(response);
    }
    catch(err) {
        resp.status(400).json({message: err.message});
    }
})


router.post('/', async (req, resp) => {
    try{
        console.log('req - body - ', req.body);
        //store data in database
        const tempObj = new Product({
            id: req.body.id,
            title: req.body.title,
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


router.delete('/:id', async(req, res) => {
    try{
        const tempid = req.params.id;
        const response = await Product.deleteOne({'id': tempid});
        res.status(200).json(response);
    }
    catch(err) {
        resp.status(400).json({message: err.message});
    }
})


router.put('/', async(req, res) => {
    try{
        console.log(req.body);
        const tempid = req.body.id;
        const response = await Product.findOneAndUpdate({'id': tempid}, req.body, {new: true});
        res.status(200).json(response);
    }
    catch(err) {
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