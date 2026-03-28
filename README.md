# DATA-STACK MERN CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) web application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).  
This project allows users to manage data through a simple and responsive interface.

---

## Live Demo

Frontend (Vercel)  
https://data-stack-one.vercel.app

Backend API (Render)  
https://data-stack-server-zb9q.onrender.com

GitHub Repository  
https://github.com/izchahat/DATA-STACK

---

##  Tech Stack

Frontend  
- React.js
- Axios
- CSS

Backend  
- Node.js
- Express.js
- MongoDB
- Mongoose

Deployment  
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## Features

- Add new user data
- View all users
- Update existing user information
- Delete users
- REST API integration
- MongoDB database connection
- Fully deployed frontend and backend

---

##  Project Structure



---

DATA-STACK
│
├── client # React Frontend
│ ├── src
│ ├── public
│ └── package.json
│
├── server # Node.js Backend
│ ├── routes
│ ├── models
│ └── index.js
│
└── README.md

---

## Installation & Setup

Clone the repository
git clone https://github.com/izchahat/DATA-STACK.git

Go to project folder
cd DATA-STACK

Install frontend dependencies
cd client
npm install

Install backend dependencies
cd ../server
npm install

Run backend server
npm start

Run frontend
cd ../client
npm start

---

## API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| GET | /api/users | Get all users |
| GET | /api/user/:id | Get single user |
| POST | /api/user | Create user |
| PUT | /api/update/user/:id | Update user |
| DELETE | /api/delete/user/:id | Delete user |

---

##  Author

**Chahat Joshi**  
Computer Science Student  
Aspiring Full Stack Developer

GitHub  
https://github.com/izchahat

---

## License

This project is for educational and learning purposes.
