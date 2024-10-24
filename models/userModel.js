const { ObjectId } = require('mongodb');
const sanitizeInput = (input) => {
    return input.replace(/<[^>]*>/g, '').trim(); 
};
// Save user data to the database
exports.saveUser = async (db, userData) => {
    return new Promise((resolve, reject) => {
      // Sanitize inputs
    const name = sanitizeInput(userData.name);
    const email = sanitizeInput(userData.email);
    const phone = sanitizeInput(userData.phone);

    // Validation
    if (!/^[A-Za-z\s]{3,30}$/.test(name)) {
    return reject("Name should be 3-30 characters long and contain only alphabets.");
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
    return reject("Invalid email address.");
    }
    if (!/^\d{10}$/.test(phone)) {
    return reject("Phone number must be 10 digits.");
    }
    if (userData.terms !== true) {
    return reject("You must accept the Terms and Conditions.");
    }
    const user = {
    name,
    email,
    phone,
    terms: true
    };
    // Insert into the MongoDB collection
    db.collection('users').insertOne(user, (err, result) => {
    if (err) return reject("Error inserting user into the database.");
    resolve(result);
    });
});
};
  