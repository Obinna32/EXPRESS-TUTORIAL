const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {id: 1, name: "Laptop", price: 1299, inStock: true, tags: ['electronics', 'work']},
        {id: 2, name: "Mouse", price: 29, inStock: false, tags: ['electronics', 'accessory']}
    ])
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    const products = [
        {id: 1, name: "Laptop", price: 1299, inStock: true, tags: ['electronics', 'work']},
        {id: 2, name: "Mouse", price: 29, inStock: false, tags: ['electronics', 'accessory']}
    ]

    const requestedProduct = products.find((product) => product.id === id);
    res.json(requestedProduct);

})

router.post('/', (req, res) =>{
    const {name, price} = req.body

    const newProduct = {name, price}
    console.log(newProduct)
    res.json({message: "New Product added", product: newProduct})
})

module.exports = router;