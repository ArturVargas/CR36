
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MongoUrl, {useNewUrlParser: true}, (err) => {
    if(err) throw err;
    console.log("Mongo Conectado correctamente");
});

const app = express();
const Project = require('./models/projects');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Server</h1>');
})

app.post('/new/project', (req, res) => {
    let params = req.body;
    console.log(params);
    
    let newProject = new Project({
        name: params.name,
        language: params.language,
        version: params.version,
        url: params.url
    });
    newProject.save((err, project) => {
        if(err){
            res.status(400).json({err});
        }
        res.json({project});
    })
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`);
})