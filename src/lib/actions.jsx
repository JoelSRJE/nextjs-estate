"use server";

import connectToDB from "./dbConnect";
import { revalidatePath } from "next/cache";
import UserModel from "./models";

export const registerUser = async (formData) => {
  const { username, email, password } = formData;

  try {
    await connectToDB();
    const newUser = new UserModel({
      username,
      email,
      password,
      isLoggedIn,
    });

    await newUser.save();

    revalidatePath("/");

    console.log("Successfully registered user: ", newUser);
    return { success: true };
  } catch (error) {
    console.error("Failed to register user:", error);
    return { error: "Something went wrong with the registration" };
  }
};
