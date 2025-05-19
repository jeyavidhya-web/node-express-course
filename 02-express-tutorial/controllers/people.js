//let { people } = require('../data');
const Person = require('../models/Person');


// GET all people
const getPeople = async (req, res) => {
  const people = await Person.find();
  res.status(200).json({ success: true, data: people });
};

// GET single person
const getPerson = async (req, res) => {
  const { id } = req.params;
  const person = await Person.findById(id);
  if (!person) {
    return res.status(404).json({ message: 'Person not found' });
  }
  res.status(200).json(person);
};

// POST new person
const addPerson = async (req, res) => {
  try {
    const newPerson = await Person.create(req.body);
    res.status(201).json({ success: true, data: newPerson });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PUT update person
const updatePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!person) return res.status(404).json({ message: 'Person not found' });
    res.status(200).json({ success: true, data: person });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE person
const deletePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    if (!person) return res.status(404).json({ message: 'Person not found' });
    res.status(200).json({ success: true, message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getPeople,
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
};

  
  


