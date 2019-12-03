
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MongoUrl, {useNewUrlParser: true}, (err) => {
    if(err) throw err;
    console.log("Mongo Conectado correctamente");
});

const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Server</h1>');
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`);
})