"use server";

import bcrypt from "bcryptjs";
import connectToDB from "./dbConnect";
import UserModel from "./models";

export const registerUser = async (formData) => {
  const { username, email, password, isLoggedIn } = formData;

  try {
    await connectToDB();

    const newUser = new UserModel({
      username,
      email,
      password,
      isLoggedIn,
    });

    await newUser.save();

    console.log("Successfully registered user: ", newUser);
    return { success: "Registered user!" };
  } catch (error) {
    return { error: "Failed to register user" };
  }
};

export const loginUser = async (user) => {
  const { email, password } = user;

  console.log("Begun logging in...");
  try {
    await connectToDB();

    const user = await UserModel.findOne({ email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const updateResult = await UserModel.updateOne(
          { email },
          { $set: { isLoggedIn: true } }
        );

        if (updateResult.modifiedCount > 0) {
          console.log("User logged in successfully");
          return { success: "Logged in successfully" };
        } else {
          console.log("Failed to update isLoggedIn");
          return { error: "Failed to update" };
        }
      } else {
        console.log("Passwords don't match");
        return { error: "Invalid credentials" };
      }
    } else {
      console.log("User not found");
      return { error: "Invalid credentials" };
    }
  } catch (error) {
    console.log("Error from actions.js: ", error); // Ta bort efteråt
    return { error: "Failed to log in" };
  }
};
