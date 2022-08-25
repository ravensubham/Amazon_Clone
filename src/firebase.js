// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSgvk6ofj28nIb2n7-ENFv5RXCobUrl8I",
  authDomain: "clone-931fa.firebaseapp.com",
  projectId: "clone-931fa",
  storageBucket: "clone-931fa.appspot.com",
  messagingSenderId: "697744822693",
  appId: "1:697744822693:web:962554f9d7eb99256ad84c",
  measurementId: "G-G1QSCNF22M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);