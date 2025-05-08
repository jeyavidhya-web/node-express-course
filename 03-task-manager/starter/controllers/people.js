const Person = require('../models/Person');


const getPeople = async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json({ success: true, data: people });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getPerson = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ success: false, message: 'Person not found' });
    }
    res.status(200).json({ success: true, data: person });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};



// Add a new person to MongoDB
const addPerson = async (req, res) => {
  const { name, age, email } = req.body;

  // Basic input validation
  if (!name || !age || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name, age, and email are required.'
    });
  }

  try {
    const newPerson = await Person.create({ name, age, email });
    res.status(201).json({
      success: true,
      person: newPerson
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
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

// ✅ EXPORT all functions
module.exports = {
  getPeople,
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
};
