import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVlhuxgFkNt0CgVYVdIPPUIR0Nv9b3n4g",
  authDomain: "workout-planner-939b2.firebaseapp.com",
  projectId: "workout-planner-939b2",
  storageBucket: "workout-planner-939b2.appspot.com",
  messagingSenderId: "772979454731",
  appId: "1:772979454731:web:42e0b5504e2fa3301da80e",
  measurementId: "G-Z46LR9BZ58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Firebase Auth
const db = getFirestore(app); // Firestore Database

export { auth, db, analytics };
