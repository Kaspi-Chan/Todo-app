// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNfBb-zdDZV0W_XEYUUYVnPkuip__jgqc",
  authDomain: "todo-app-1fe7f.firebaseapp.com",
  projectId: "todo-app-1fe7f",
  storageBucket: "todo-app-1fe7f.appspot.com",
  messagingSenderId: "954458123041",
  appId: "1:954458123041:web:3bd0a05a1770d044576c60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);