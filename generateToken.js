const crypto = require('crypto');
const fs = require('fs');
function generateToken(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}
const token = generateToken();
fs.writeFileSync('.env', `API_TOKEN=${token}`, { flag: 'a' });
console.log(`Generated API Token: API_TOKEN=${token}`);
