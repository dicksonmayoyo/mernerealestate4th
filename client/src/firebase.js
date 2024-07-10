// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9371d.firebaseapp.com",
  projectId: "mern-estate-9371d",
  storageBucket: "mern-estate-9371d.appspot.com",
  messagingSenderId: "911210840550",
  appId: "1:911210840550:web:5e6feb09ab4f6e934a9627"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);