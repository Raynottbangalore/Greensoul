// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhzT-hRIFgbfXrUtAzFDIu3H1bfuS9KK8",
  authDomain: "greensoul-c68c5.firebaseapp.com",
  projectId: "greensoul-c68c5",
  storageBucket: "greensoul-c68c5.firebasestorage.app",
  messagingSenderId: "30237742488",
  appId: "1:30237742488:web:cb661a96259d9e7f7787ed",
  measurementId: "G-NZNW51RT2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
