# Secure Login System

## Overview
This project is a secure login web application built using Node.js and Express. It implements authentication with hashed passwords, session management, and protection against common security issues.

---

## Features
- User registration and login system
- Password hashing using bcrypt
- Session management using express-session
- Input validation
- Protected routes (authentication required)
- Logout functionality

---

## Technologies Used
- Node.js
- Express.js
- bcrypt
- express-session

---

## Project Structure
```
secure-login/
│── server.js
│── package.json
```

---

## How to Run

1. Clone the repository:
```
git clone https://github.com/your-username/secure-login.git
```

2. Navigate to the project folder:
```
cd secure-login
```

3. Install dependencies:
```
npm install
```

4. Run the server:
```
npm start
```

5. Open browser or Postman:
```
http://localhost:3000
```

---

## API Endpoints

### Register
POST /register  
Body:
```
{
  "username": "user1",
  "password": "password123"
}
```

### Login
POST /login  
Body:
```
{
  "username": "user1",
  "password": "password123"
}
```

### Dashboard (Protected)
GET /dashboard  

### Logout
GET /logout  

---

## Learning Outcomes
- Understanding authentication and authorization  
- Implementing password hashing  
- Managing sessions securely  
- Building secure backend systems  

---

## Future Enhancements
- Add database (MongoDB/MySQL)  
- Implement JWT authentication  
- Add Two-Factor Authentication (2FA)  
- Frontend integration  

---

## Acknowledgment
This project was developed as part of a cybersecurity learning task focusing on secure authentication systems.
