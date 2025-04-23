const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

require('dotenv').config();


const Person = require('../models/Person');  // Adjust path if necessary
//get all people
const getPeople = async (req, res) => {
  try {
    const people = await Person.find({});
    res.status(200).json({ people });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
//get one people using ID
const getPerson = async (req, res) => {
  try {
    const {id:peopleID}=req.params
    const person = await Person.findOne({  _id:peopleID});
    if (!person) {
      return res.status(404).json({ msg:`Person not found with id: ${peopleID}`})
    }
    res.status(200).json({ person });
  } catch (error) {
   res.status(500).json({ msg:error });
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
    const {id:peopleID}=req.params
    const person = await Person.findByIdAndUpdate({_id:peopleID}, req.body,
      {new:true,
       runValidator:true ,
    }) 
      
    
    if (!person) return res.status(404).json({ message: 'Person not found' });
    res.status(200).json({ success: true, data: person });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE person
const deletePerson = async (req, res) => {
  try {
    const {id:peopleID}=req.params
    const person = await Person.findByIdAndDelete({_id:peopleID});
    if (!person) {
      return res.status(404).json({ msg:`Person not found with id: ${peopleID}`})
    }
    res.status(200).json({ person });
    
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
