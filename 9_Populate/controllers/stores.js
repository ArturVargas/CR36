
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
    });
};

exports.getStores = (req, res) => {
    Store.find({}, (err, stores) => {
        if(err){
            res.status(400).json({message: `${err}, No se encontraron tiendas`});
        }
        res.status(200).json({stores});
    });
};

exports.getStore = (req, res ) => {
    const {id} = req.params
    Store.findById(id).populate('products', 'name').exec((err, store) => {
        if(err){
            res.status(400).json({err});
        }
        res.json({store})
    })
}