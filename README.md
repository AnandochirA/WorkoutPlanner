Workout Planner

Overview

Workout Planner is a web application designed to help users manage their fitness journey effectively. Built with the MERN stack and Firebase, it provides real-time updates, exercise tracking, and progress monitoring through an intuitive and user-friendly interface.

Live Application

Workout Planner on GitHub

Key Features

Real-Time Updates: Leveraged Firebase to provide seamless real-time updates for workout plans and progress tracking.

RESTful API Integration: Implemented 14 RESTful API endpoints with Node.js and Express.js for efficient management of workout plans, exercises, and user data. Optimized backend response time from 6 seconds to 3 seconds.

Enhanced Security: Improved application security with OAuth authentication, ensuring secure access control and robust data protection.

Tech Stack

Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

Authentication: Firebase Authentication with OAuth

Real-Time Updates: Firebase Realtime Database

Installation and Setup

Clone the Repository:

git clone https://github.com/AnandochirA/WorkoutPlanner.git
cd WorkoutPlanner

Install Dependencies:

npm install
cd client
npm install

Configure Firebase:

Add your Firebase configuration to the .env file in both the client and server directories.

Run the Application:

Server:

npm start

Client:

cd client
npm start

Access the Application:

Open your browser and navigate to http://localhost:3000.

API Endpoints

Examples:

Get All Workout Plans:

Endpoint: /api/workouts

Method: GET

Create a New Workout Plan:

Endpoint: /api/workouts

Method: POST

Delete a Workout Plan:

Endpoint: /api/workouts/:id

Method: DELETE
