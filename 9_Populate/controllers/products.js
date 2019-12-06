
const Product = require('../models/product');

exports.newProduct = (req, res) => {
    let params = req.body;
    if(!params.name){
        res.status(400).json({message: "El nombre del producto es requerido"});
    }
    let productNew = Product({
        name: params.name,
        price: params.price,
        stock_num: params.stock_num
    });
    productNew.save((err, product) => {
        if(err){
            console.log(err);
            res.status(400).json({message:"Error al crear nuevo Producto"});
        }
        res.status(201).json({message: product});
    })

}