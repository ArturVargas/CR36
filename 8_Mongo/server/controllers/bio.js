
const Bio = require('../models/bio');

exports.createBio = (req, res) => {
    const params = req.body;
    if(params.name) {
        let newBio = Bio({
            ...params
        });
        newBio.save((err, data) => {
           err ? res.status(400).json({message: 'Ocurrio un error', err}) 
           : res.status(201).json({message: 'Datos agregados', data});
        });
    } else {
        res.status(400).json({message: 'El nombre es requerido'});
    }
};

exports.getBio = (req, res) => {
    Bio.find().exec((err, data) => {
        err ? res.status(400).json({message: 'Error al traer información', err})
        : res.json({data});
    });
};

exports.updateBio = (req, res) => {
    const {id} = req.params;
    id ?
    Bio.findOneAndUpdate({_id: id},{$set: req.body}, {new: true}).
        exec((err, data) => {
            err ? res.status(400).json({message: 'Error al actualizar Bio', err})
            : res.json({data});
        })
    : res.status(400).json({message: 'El id es requerido'});
};