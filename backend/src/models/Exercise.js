import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig.js'; // Adjust the path if necessary

/**
 * @typedef {Object} Exercise
 * @property {string} id - The unique identifier for the exercise.
 * @property {string} name - The name of the exercise.
 * @property {number} sets - The number of sets for the exercise.
 * @property {number} reps - The number of repetitions.
 * @property {string} instruction - The explanation about perfect technique
 * @property {number} [duration] - The duration in seconds (optional, for exercises like planks).
 * @property {Date} [createdAt] - The date when the exercise was created. (optional)
 */

// Define your workout plan based on the model
const exercise = {
    name: 'push ups',
    sets: 3,
    reps: 12,
    instruction: 'do it perfect',
    createdAt: new Date()
  };
  
  // Reference your Firestore collection
  const exercisesCollection = collection(db, 'exercises');
  
  // Function to add the document automatically
  async function createExercise() {
    try {
      const docRef = await addDoc(exercisesCollection, exercise);
      console.log('Document successfully written with ID:', docRef.id);
    } catch (error) {
      console.error('Error adding document:', error);
    }
  }
  
  export default createExercise; // Export the function
  