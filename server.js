const cors = require('cors');

const express = require('express');

const productRouter = require('./products')

const app = express();

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))

app.use(express.json())

app.use('/products', productRouter);

app.get('/', (req, res) => {
    res.send('Hello from Express');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
})

app.get('/contact', (req, res) =>{
    res.send('This is the contact page.')
})


app.get('/message', (req, res) => {
    res.json({message: "Hello from your express backend"});
})

app.post('/message', (req, res) => {
    const { name, body } = req.body

    console.log('New message: ', name, message)
    res.json({message: "Thankk you for your message"})
})

app.listen(3000, () => {
    console.log('The Server is running on port 3000');
});