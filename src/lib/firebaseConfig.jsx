import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJu_R5FgLH2yhZ2zQdNTXU47fhp0EUCEM",
  authDomain: "testing-c09f1.firebaseapp.com",
  projectId: "testing-c09f1",
  storageBucket: "testing-c09f1.appspot.com",
  messagingSenderId: "357176149975",
  appId: "1:357176149975:web:a9cd2d6a0cb944042bed92",
};

// console.log("Initializing Firebase app...");
const app = initializeApp(firebaseConfig);

//exporterar dessa
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// console.log("Firebase app initialized");

export { db, storage, auth };
