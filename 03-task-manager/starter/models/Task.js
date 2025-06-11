const mongoose = require('mongoose');
//const MONGO_URI = 'mongodb+srv://yourusername:yourpassword@cluster0.ydlvm1l.mongodb.net/taskmanager?retryWrites=true&w=majority';

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20,'name cannot be more than 20 characters' ],
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
});// {
  //timestamps: true, // adds createdAt and updatedAt automatically
//});
//const Person = mongoose.models('Person', PersonSchema);
module.exports = mongoose.model('Task', TaskSchema);
