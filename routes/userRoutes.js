const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authorizeToken = require('../middleware/authMiddleware'); 

// Route to display the form
router.get('/form', userController.displayForm);
router.post('/submit', authorizeToken, userController.submitForm); 


module.exports = router;
