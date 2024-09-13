import { Router, Request, Response } from 'express';
import { db } from '../config/firebaseConfig';
import { collection, addDoc, getDocs, query, where, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { WorkoutPlan } from '../models/WorkoutPlan';  // Ensure this path is correct

// Initialize the router and Firestore collection
const router = Router();
const workoutPlansCollection = collection(db, 'workoutPlans');

// Create a new workout plan
router.post('/', async (req: Request, res: Response) => {
    const { userId, title, description, days } = req.body;

    try {
        const docRef = await addDoc(workoutPlansCollection, {
            userId,
            title,
            description,
            days,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        res.status(201).json({ id: docRef.id });
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

// Get all workout plans for a specific user
router.get('/:userId', async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const q = query(workoutPlansCollection, where('userId', '==', userId));
        const querySnapshot = await getDocs(q);

        const workoutPlans = querySnapshot.docs.map(doc => {
            const data = doc.data(); // Get raw data from Firestore
            const workoutPlan: WorkoutPlan = {
                ...data, // Spread the data into the workoutPlan object
                id: doc.id,
                userId: '',
                title: '',
                days: {},
                createdAt: new Date,
                updatedAt: new Date
            };

            return workoutPlan;
        });

        res.status(200).json(workoutPlans);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

//Get a specific workout Plan
router.get('plan/:id', async(req, res) => {
    const { id } = req.params;
    try{
        const docRef = doc(db, 'workoutPlans', id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()){
            return res.status(404).json({ error: 'WorkoutPlan not found'});
        }
        res.status(200).json({ id:  docSnap.id, ...docSnap.data() });
    } catch (error){
        res.status(400).json({ error: (error as Error).message });
    }
});

// Update a workout plan
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, exercises } = req.body;
    try {
      const docRef = doc(db, 'workoutPlans', id);
      await updateDoc(docRef, {
        name,
        description,
        exercises,
        updatedAt: new Date(),
      });
      res.status(200).json({ message: 'Workout Plan updated successfully' });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  });

//Delete a workout plan
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const docRef = doc(db, 'workoutPlans', id);
        await deleteDoc(docRef);
        res.status(200).json({message : 'Workout plan deleted successfully'});
    } catch (error) {
        res.status(400).json({ error: (error as Error).message});
    }
});

export default router;
