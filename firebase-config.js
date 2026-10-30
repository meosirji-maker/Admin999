// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJpeDkuRuVLAndf1Pbgu1E_FhmKihtPQg",
  authDomain: "corex-f49fe.firebaseapp.com",
  databaseURL: "https://corex-f49fe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "corex-f49fe",
  storageBucket: "corex-f49fe.firebasestorage.app",
  messagingSenderId: "551412336699",
  appId: "1:551412336699:web:44a267fdcd6fc15418341e",
  measurementId: "G-5HKHVNTFV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };