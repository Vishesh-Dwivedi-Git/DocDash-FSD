const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {jwtSecret} =require('../config/index');

const router = express.Router();
// Signup Route
// Signup Route
router.post('/signup', async (req, res) => {
  try {
    console.log("In the userRoutes");
    const { email, password } = req.body;

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user and save it (assuming password hashing is done in the model)
    const user = new User({ email, password });
    await user.save();

    // Send a success response
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Route
// Login Route


module.exports = router;

