
const Store = require('../models/store');

exports.newStore = (req, res) => {
    let params = req.body;
    if(!params.name){
        res.status(400).json({message: "El nombre de la tienda es requerido"});
    }
    let newStore = Store({
        name: params.name,
        direction: params.direction,
        products: params.products
    });
    newStore.save((err, store) => {
        if(err){
            console.log(err);
            
            res.status(400).json({message:"Error al crear nueva Store"});
        }
        res.status(201).json({message: store});
    })

}