import { Router } from "express";
import { db } from "../config/firebaseConfig.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const router = Router();
const exercisesCollection = collection(db, "exercises");

// Create a new exercise
router.post("/", async (req, res) => {
  const { name, sets, bodyPart, instruction } = req.body;

  try {
    const docRef = await addDoc(exercisesCollection, {
      name,
      sets,
      bodyPart,
      instruction,
      createdAt: new Date(),
    });
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all exercises for a specific bodyPart
router.get("/:bodyPart", async (req, res) => {
  const { bodyPart } = req.params;

  try {
    const q = query(exercisesCollection, where("bodyPart", "==", bodyPart));
    const querySnapshot = await getDocs(q);

    const exercises = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    res.status(200).json(exercises);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all exercises
router.get("/exercises", async (req, res) => {
  try {
    const querySnapshot = await getDocs(exercisesCollection);
    const exercises = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(exercises);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update exercise
router.put("/exercises/:id", async (req, res) => {
  const { id } = req.params;
  const { name, sets, instruction, bodyPart } = req.body;

  try {
    const docRef = doc(db, "exercises", id);
    await updateDoc(docRef, {
      name,
      sets,
      instruction,
      bodyPart,
    });
    res.status(200).json({ message: "Exercise updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete exercise
router.delete("/exercises/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const docRef = doc(db, "exercises", id);
    await deleteDoc(docRef);
    res.status(200).json({ message: "Exercise deleted successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
