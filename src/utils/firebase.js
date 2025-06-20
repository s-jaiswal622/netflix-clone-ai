import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHLarLTNnfvFe5IevxAcWatcOegwkFZqw",
  authDomain: "movie-stream-clone.firebaseapp.com",
  projectId: "movie-stream-clone",
  storageBucket: "movie-stream-clone.firebasestorage.app",
  messagingSenderId: "235266256813",
  appId: "1:235266256813:web:cfd6bfcb3dbb6355603b24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const analytics = getAnalytics(app);
