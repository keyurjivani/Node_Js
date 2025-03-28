// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQJyLzuLmYZ1rq3H7vyiG33lAuGEY0k0I",
  authDomain: "fir-a40c5.firebaseapp.com",
  projectId: "fir-a40c5",
  storageBucket: "fir-a40c5.firebasestorage.app",
  messagingSenderId: "514666443771",
  appId: "1:514666443771:web:d267260a24ef86b289115e",
  measurementId: "G-0WP6XW4VTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const db = getFirestore(app);

export const googleAuth = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export const signupWithEmail = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signin = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
