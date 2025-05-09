const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
}, {
  timestamps: true, // adds createdAt and updatedAt automatically
});

module.exports = mongoose.model('Person', PersonSchema);
