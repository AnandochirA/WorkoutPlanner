"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analytics = exports.db = exports.auth = void 0;
const app_1 = require("firebase/app");
const analytics_1 = require("firebase/analytics");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
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
const app = (0, app_1.initializeApp)(firebaseConfig);
const analytics = (0, analytics_1.getAnalytics)(app);
exports.analytics = analytics;
const auth = (0, auth_1.getAuth)(app); // Firebase Auth
exports.auth = auth;
const db = (0, firestore_1.getFirestore)(app); // Firestore Database
exports.db = db;
