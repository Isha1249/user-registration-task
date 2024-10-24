require('dotenv').config(); 
// Verify API Token
const authorizeToken = (req, res, next) => {
  const apiToken = req.headers['authorization'];
  if (apiToken !== `Bearer ${process.env.API_TOKEN}`) {
    return res.status(403).json({ message: "Forbidden: Invalid API Token" });
  }
  next();
};

module.exports = authorizeToken;
