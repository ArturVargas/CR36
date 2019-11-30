
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Express</h1>');
})

app.post('/new/user',(req, res) => {
    console.log(req.body.name);
    res.status(400).json({message:"Ok"});
})

app.get('/user/:id', (req, res) => {
    console.log(req.params.id)
    res.status(200).json({id: req.params.id })
})

app.get('/api/suma', (req, res) => {
    let {num1, num2} = req.query;
    let result = parseInt(num1) + parseInt(num2);
    res.status(200).json({resultado: result})
})




app.listen(PORT, () => {
    console.log(`Servidor correindo en puerto: ${PORT}`);
})
