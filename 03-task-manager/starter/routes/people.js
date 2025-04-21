const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.json({ message: 'This is the people endpoint' });
});
// Import controller functions
const {
  getPeople,
  addPerson,
  getPerson,
  updatePerson,
  deletePerson
} = require('../controllers/people'); // Import the controller functions

// Define routes and associate them with controller functions

// GET all people
router.get('/', getPeople); // Calls the getPeople function from controller

// GET person by ID
router.get('/:id', getPerson); // Calls the getPerson function from controller

// POST new person
router.post('/', addPerson); // Calls the addPerson function from controller

// PUT update person
router.put('/:id', updatePerson); // Calls the updatePerson function from controller

// DELETE person
router.delete('/:id', deletePerson); // Calls the deletePerson function from controller

// Export the router to be used in the main app
module.exports = router;
