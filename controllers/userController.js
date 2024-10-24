const { saveUser } = require('../models/userModel');
const { connectDB } = require('../config/db');
require('dotenv').config();
exports.displayForm = (req, res) => {
    res.render('form', { error: null, apiToken: process.env.API_TOKEN });
};
// Submit User Form API
exports.submitForm = async (req, res) => {
    try {
        const db = await connectDB();
        // Sanitize inputs
        const userData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        terms: req.body.terms
        };
        const result = await saveUser(db, userData);
        res.status(200).json({ message: 'User saved successfully', result });
    } catch (error) {
        res.status(500).json({ message: 'Failed to submit form', error: error.toString() });
    }
};
