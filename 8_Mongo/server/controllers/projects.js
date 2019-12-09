
const Project = require('../models/projects');

exports.createProject = (req, res) => {
    const params = req.body;
    const newProject = new Project({
        name: params.name,
        language: params.language,
        version: params.version,
        url: params.url
    });
    newProject.save((err, project) => {
        err ? res.status(400).json({ err })
        : res.json({ project });
    });
};

exports.getProjects = (req, res) => {
    Project.find().exec((err, projects) => {
        err ? res.status(400).json({message: 'No se encontraron porjectos', err})
        : res.json({projects});
    });
};

exports.getProject = (req, res) => {
    const {id} = req.params;
    Project.findOne(id).exec((err, project) => {
        err ? res.status(400).json({message:'No se encontro el proyecto', err})
        : res.json({project});
    });
};

exports.updateProject = (req, res) => {
    const {id} = req.params;
    Project.findOneAndUpdate({_id: id}, {$set: req.body})
        .exec((err, project) => {
            err ? res.status(400).json({message:'No se pudo actualizar el proyecto', err})
            : res.json({project});
    });
};