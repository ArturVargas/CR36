
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bioSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  profession: {
    type: String
  },
  address: {
    type: String
  },
  social: {
    type: [
      {
        name: String,
        url: String
      }
    ]
  },
  experience: {
    type: [
      {
        company: String,
        jobTitle: String,
        jobDesc: String,
        startDate: Date,
        endDate: Date
      }
    ]
  },
  education: {
    type: [
      {
        institution: String,
        degree: String,
        description: String,
        startDate: Date,
        endDate: Date
      }
    ]
  },
  certifications: {
    type: [
      {
        name: String,
        institution: String,
        description: String,
        date: Date
      }
    ]
  },
  skills: {
    type: [
      {
        name: String,
        level: String
      }
    ]
  },
  avatar: {
    type: String,
    default: 'https://lh3.googleusercontent.com/a-/AAuE7mDvf3eDUv2xWCV66iQZaAReFbBVuio2WBlwyc10Qw=s96'
  }
}, { timestamps: true })

const Bio = mongoose.model('bio', bioSchema);

module.exports = Bio;