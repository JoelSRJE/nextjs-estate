import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHNjbdApfSLuuxiGw7Mc3cz1hnVr_snbM",
  authDomain: "estate-4f315.firebaseapp.com",
  projectId: "estate-4f315",
  storageBucket: "estate-4f315.appspot.com",
  messagingSenderId: "570690684041",
  appId: "1:570690684041:web:69e538197d85064e997258",
};

// console.log("Initializing Firebase app...");
const app = initializeApp(firebaseConfig);

//exporterar dessa
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// console.log("Firebase app initialized");

export { db, storage, auth };
