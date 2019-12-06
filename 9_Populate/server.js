
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

require('dotenv').config();

mongoose.connect(process.env.MongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) throw err;
    console.log("Conectado a Mongo");
});

const { newStore } = require('./controllers/stores');
const { newProduct } = require('./controllers/products');

app.get('/', (req, res) => {
    res.send(`<h1>Server Ready! </h1>`);
});

app.post('/new/store', newStore);
app.post('/new/product', newProduct);

app.listen(process.env.PORT, () => {
    console.log(`Servidor Correindo en puerto: ${process.env.PORT}`);
})


