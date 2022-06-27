const express = require('express');
const router = express.Router();


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


router.post('/', (req, resp) => {
    try{
        console.log('req - body - ', req.body);
        //store data in database
        resp.send('api success...');
    }
    catch(err){
        resp.send('api failed...');
    }
})

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