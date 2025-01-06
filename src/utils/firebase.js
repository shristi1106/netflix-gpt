// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgtPu9NUnwudwgbtItjqNrKprQ6_NgvFg",
  authDomain: "netflixgpt3-bf1da.firebaseapp.com",
  projectId: "netflixgpt3-bf1da",
  storageBucket: "netflixgpt3-bf1da.firebasestorage.app",
  messagingSenderId: "556237822443",
  appId: "1:556237822443:web:c9276c3e62596b5728e1ae",
  measurementId: "G-3CC7NYLZNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();