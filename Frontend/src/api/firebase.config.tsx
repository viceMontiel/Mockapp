// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1pjxKq5NdXxxxI0DdFU8qE32v7lBdzHk",
  authDomain: "mockapp-441de.firebaseapp.com",
  projectId: "mockapp-441de",
  storageBucket: "mockapp-441de.appspot.com",
  messagingSenderId: "732664997964",
  appId: "1:732664997964:web:0dab661e2aa1ed0422ace9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)