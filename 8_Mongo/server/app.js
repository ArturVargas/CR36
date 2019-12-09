
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) throw err;
    console.log("Mongo Conectado correctamente");
});

const app = express();

app.use(express.json());

const { createBio, getBio, updateBio } = require('./controllers/bio');
const { createProject, getProjects, getProject, updateProject } = require('./controllers/projects');

app.get('/', (req, res) => {
    res.send('<h1>Server</h1>');
});

//Bio
app.post('/new/bio', createBio);
app.put('/bio/:id', updateBio);
app.get('/bio', getBio);

//Project
app.post('/new/project', createProject);
app.get('/projects', getProjects);
app.get('/project/:id', getProject);
app.put('/project/:id', updateProject);


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`);
})