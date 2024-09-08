import { initializeApp, credential as _credential, database } from 'firebase-admin';
import serviceAccount from '../config/workout-planner-939b2-firebase-adminsdk-3baul-25583eef8a.json'; // Path to your service account key file

initializeApp({
  credential: _credential.cert(serviceAccount),
  databaseURL: 'https://workout-planner-939b2-default-rtdb.firebaseio.com/' 
});

const db = database();
export default db;
