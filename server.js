const cors = require('cors');

const express = require('express');

const app = express();

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))

app.get('/', (req, res) => {
    res.send('Hello from Express');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
})

app.get('/contact', (req, res) =>{
    res.send('This is the contact page.')
})

app.get('/products', (req, res) => {
    res.json([
        {id: 1, name: "Laptop", price: 1299, inStock: true, tags: ['electronics', 'work']},
        {id: 1, name: "Mouse", price: 29, inStock: false, tags: ['electronics', 'accessory']}
    ])
});

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);

    const products = [
        {id: 1, name: "Laptop", price: 1299, inStock: true, tags: ['electronics', 'work']},
        {id: 2, name: "Mouse", price: 29, inStock: false, tags: ['electronics', 'accessory']}
    ]

    const requestedProduct = products.find((product) => product.id === id);
    res.json(requestedProduct);

})

app.get('/message', (req, res) => {
    res.json({message: "Hello from your express backend"});
})

app.listen(3000, () => {
    console.log('The Server is running on port 3000');
});