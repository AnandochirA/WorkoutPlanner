import { Router } from "express";
import { db } from "../config/firebaseConfig.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const router = Router();
const usersCollection = collection(db, "users");

// Create user
router.post("/", async (req, res) => {
  const { name, email, workoutPlans } = req.body;
  try {
    const docRef = await addDoc(usersCollection, {
      name,
      email,
      workoutPlans,
      createdAt: new Date(),
    });
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all users
router.get("/", async (req, res) => {
  try {
    const querySnapshot = await getDocs(usersCollection);

    const users = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id, // Set the `id` explicitly
        ...data, // Spread the rest of the data
      };
    });

    res.status(200).json(users); // Correct status code for successful read
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a user
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, workoutPlans } = req.body;

  try {
    const docRef = doc(db, "users", id); // Reference to 'users' collection
    await updateDoc(docRef, {
      name,
      email,
      workoutPlans,
    });
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const docRef = doc(db, "users", id); // Reference to 'users' collection
    await deleteDoc(docRef);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
