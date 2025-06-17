// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth
  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL5C7QDAkIaSJztI7Z3ee9T2SJU3MCqv4",
  authDomain: "netflixgpt-defe4.firebaseapp.com",
  projectId: "netflixgpt-defe4",
  storageBucket: "netflixgpt-defe4.firebasestorage.app",
  messagingSenderId: "527059951632",
  appId: "1:527059951632:web:a0de96cb082788e4c6aa95",
  measurementId: "G-81R6DB9QD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();