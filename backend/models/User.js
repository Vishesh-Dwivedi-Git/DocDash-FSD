const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dashboards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dashboard' }],
});

// Hash password before saving


// Method to match password


module.exports = mongoose.model('User', userSchema);