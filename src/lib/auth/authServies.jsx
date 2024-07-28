import { auth } from "@/lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      throw new Error("This email is already in use.");
    } else {
      throw new Error("Failed to register user.");
    }
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      throw new Error("No user found with this email.");
    } else if (error.code === "auth/wrong-password") {
      throw new Error("Incorrect password.");
    } else {
      throw new Error("Failed to login user.");
    }
  }
};

export const logoutUser = async () => {
  await signOut(auth);
};

export const authStateListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
