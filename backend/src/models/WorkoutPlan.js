import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig.js'; // Adjust the path if necessary

/**
 * @typedef {Object} WorkoutPlan
 * @property {string} id - The unique identifier for the workout plan.
 * @property {string} userId - The unique identifier for the user associated with the workout plan.
 * @property {string} title - The title of the workout plan.
 * @property {string} [description] - A description of the workout plan (optional).
 * @property {Object.<string, Exercise[]>} days - Exercises by day.
 * @property {Date} createdAt - The date when the workout plan was created.
 * @property {Date} updatedAt - The date when the workout plan was last updated.
 */

/**
 * @typedef {Object} Exercise
 * @property {string} exerciseId - The unique identifier for the exercise.
 * @property {string} name - The name of the exercise.
 * @property {number} sets - The number of sets for this exercise.
 * @property {number} reps - The number of repetitions per set.
 */

// Define your workout plan based on the model
const workoutPlan = {
  userId: 'user_123456',
  title: 'Strength Training Plan',
  description: 'A 7-day workout plan focused on strength training.',
  days: {
    Monday: [
      { exerciseId: 'ex_001', name: 'Bench Press', sets: 4, reps: 8 },
      { exerciseId: 'ex_002', name: 'Deadlift', sets: 3, reps: 6 }
    ],
    Wednesday: [
      { exerciseId: 'ex_003', name: 'Squat', sets: 5, reps: 5 }
    ]
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

// Reference your Firestore collection
const workoutPlansCollection = collection(db, 'workoutPlans');

// Function to add the document automatically
async function createWorkoutPlan() {
  try {
    const docRef = await addDoc(workoutPlansCollection, workoutPlan);
    console.log('Document successfully written with ID:', docRef.id);
  } catch (error) {
    console.error('Error adding document:', error);
  }
}

export default createWorkoutPlan; // Export the function
