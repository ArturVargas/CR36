
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: false
    },
    version:{
        type: Number,
        required: false
    },
    url: {
        type: String,
        required: true,
        default: ''
    },
    img: {
        type: String,
        default: ''
    }
},{timestamps: true})


const Project = mongoose.model('project', projectSchema);

module.exports = Project;