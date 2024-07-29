import { auth, db } from "@/lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export const registerUser = async (email, password, displayName) => {
  try {
    console.log("Starting user registration...");
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    console.log("User registered, updating profile...");
    await updateProfile(user, {
      displayName: displayName,
    });

    console.log("Profile updated, setting Firestore document...");
    await setDoc(doc(db, "users", user.uid), {
      displayName,
      email,
    });

    console.log("User registered and profile updated: ", user);
    return user;
  } catch (error) {
    console.error("Error during user registration: ", error);
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
    console.log("User logged in: ", user);
    return user;
  } catch (error) {
    console.error("Error during user login: ", error);
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
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error during user logout: ", error);
    throw new Error("Failed to logout user.");
  }
};

export const authStateListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
