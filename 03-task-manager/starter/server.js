require('dotenv').config();

console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

 // Loads the .env file
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = express();
const peopleRoutes = require('./routes/people');

// Middleware to parse JSON
app.use(express.json());

// Import your routes
app.use('/api/people', peopleRoutes);

// MongoDB Connection
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected...');
    
    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
  }
};




    
  
  


start();
