const express = require('express');
const router = express.Router();
const Person = require('../models/Person'); // make sure this path is correct

// Import controller functions
const {
  getPeople,
  addPerson,
  getPerson,
  updatePerson,
  deletePerson
} = require('../controllers/people');
console.log('getPerson:', getPerson);  // This will log either the function or undefined


// Route to get all people
router.get('/', getPeople);

// Route to get a single person by ID
router.get('/:id',getPerson);

// Route to add a new person
router.post('/', addPerson);

// Route to update a person by ID
router.put('/:id', updatePerson);

// Route to delete a person by ID
router.delete('/:id', deletePerson);

module.exports = router;

