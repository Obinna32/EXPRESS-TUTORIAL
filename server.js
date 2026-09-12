const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
})

app.get('/contact', (req, res) =>{
    res.send('This is the contact page.')
})

app.listen(3000, () => {
    console.log('The Server is running on port 3000');
});