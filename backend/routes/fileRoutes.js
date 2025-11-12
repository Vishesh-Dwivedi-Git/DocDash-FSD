const express = require('express');
const multer = require('multer');
const cloudinary = require('../services/cloudinary');
const File = require('../models/File');
const Dashboard = require('../models/Dashboard');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Multer Setup
const storage = multer.memoryStorage();


// File Upload Route


module.exports = router;
