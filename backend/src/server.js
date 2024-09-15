
import serviceAccount from './config/serviceAccoutKey.json' assert { type: 'json' }; // Corrected file name
import { initializeApp } from 'firebase-admin/app';
import { cert } from 'firebase-admin/app';
import express from 'express';
import cors from 'cors';  // Optional: for enabling CORS
import userRouter from './routes/userRouter.js';
import workoutPlanRouter from './routes/workoutRouter.js';
import exerciseRouter from './routes/exerciseRouter.js';


initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://workout-planner-939b2-default-rtdb.firebaseio.com/",
});

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());  // Optional: if you need to handle CORS issues
app.use(express.json());  // For parsing JSON bodies

// API Routes
app.use('/api/users', userRouter);
app.use('/api/workout-plans', workoutPlanRouter);
app.use('/api/exercises', exerciseRouter);

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Workout Planner API!');
});

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};

app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
