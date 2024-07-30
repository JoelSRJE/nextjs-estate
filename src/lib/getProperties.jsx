import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

export const getProperties = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "properties"));
    const properties = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return properties;
  } catch (error) {
    console.error("Error fetching properties: ", error);
    throw new Error("Failed to fetch properties.");
  }
};
