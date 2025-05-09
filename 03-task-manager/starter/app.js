require('dotenv').config();
const express = require('express');
const app = express();


const peopleRoutes = require('./routes/people');



const mongoose = require('mongoose');

app.use(express.json());
app.use('/people', peopleRoutes);

app.get('/people', (req, res) => {
  res.send(people);
});
 // Loads the .env file
app.get('/people/:id', (req, res) => {
  try{
    const person = people.find(p => p.id === parseInt(req.params.id)); // Using 'id' as a URL parameter
    if (!person) return res.status(404).send('Person not found');
    res.send(person);
}catch (error) {
      res.status(500).json({ error: error.message });
    }
});
const PORT = process.env.PORT || 3000;
const start =async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
    console.log('Connected to MongoDB ✅');
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  });
}catch (error) {

  console.error('MongoDB connection failed ❌:', error.message);
}
};
start();