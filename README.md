# User Registration Form with Express and MongoDB

This project implements a user registration form using Node.js, Express, and MongoDB. It includes server-side validation and sanitization of inputs.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [GET /user/form](#get-userform)
  - [POST /user/submit](#post-usersubmit)
- [Request Body Payload](#request-body-payload)
- [Validation Rules](#validation-rules)
- [Technologies Used](#technologies-used)

## Installation

# 1. Clone the repository:
   ```bash
   git clone https://github.com/Isha1249/user-registration-task.git
   cd user-registration-task

# 2. Install the dependencies:
    ```bash
      npm install
    
# 3. Create a .env file in the root directory and add your MongoDB URI and API token:
   MONGO_URI=<your-mongodb-uri>
   API_TOKEN=<your-api-token>
   PORT=<port>
   
# 4.  Usage
    To start the server, run:
    ```bash
    npm start

The application will be running at http://localhost:3000.

# API Endpoints
GET /user/form
  Description: Returns the HTML form for user registration.
Response:
  Status: 200 OK
  Content-Type: text/html

POST /user/submit
Description: Submits the user registration form data.
Authorization: Requires an API token in the Authorization header.
Request Body Payload
  Content-Type: application/json
Payload Structure:
json:
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "terms": "boolean"
}
Example Request
```bash
curl -X POST http://localhost:3000/user/submit \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <your-api-token>" \
-d '{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890",
  "terms": true
}'
Response:
  On Success (User saved):
  Status: 200 OK
Response Body:
json
{
  "message": "User saved successfully",
  "result": { ... }
}
On Validation Error:
  Status: 400 Bad Request
Response Body:
{
  "message": "Validation error message here"
}
Validation Rules
  Name: Must be between 3 and 30 characters and contain only alphabets.
  Email: Must be a valid email address.
  Phone: Must be a 10-digit number (only numerical).
  Terms and Conditions: Must be accepted (checked).

Technologies Used
Node.js
Express
MongoDB (Native Driver)
EJS for rendering HTML
