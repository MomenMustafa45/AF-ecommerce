// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeJwmA23ufOfU_7gjopPsFYdYfrzVchIY",
  authDomain: "nobysongs-6f06e.firebaseapp.com",
  projectId: "nobysongs-6f06e",
  storageBucket: "nobysongs-6f06e.firebasestorage.app",
  messagingSenderId: "857492160733",
  appId: "1:857492160733:web:117c2bfde0b61aac0b9b34",
  measurementId: "G-ZMTJ9NQ5BL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
