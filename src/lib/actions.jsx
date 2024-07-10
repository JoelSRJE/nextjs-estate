"use server";

import { Jwt } from "jsonwebtoken";
import { setCookie } from "cookies-next";
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

    return { success: "Registered user!" };
  } catch (error) {
    return { error: "Failed to register user" };
  }
};

export const loginUser = async (credentials) => {
  const { email, password } = credentials;

  try {
    await connectToDB();

    const user = await UserModel.findOne({ email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        const updateResult = await UserModel.updateOne(
          { email },
          { $set: { isLoggedIn: true } }
        );

        // Receives the updated info
        const updatedUser = await UserModel.findOne({ email }).lean();
        const plainUser = JSON.parse(JSON.stringify(updatedUser));

        if (updateResult.modifiedCount > 0) {
          // Sends the updated info back
          return { success: "Logged in successfully", updatedUser: plainUser };
        } else {
          return { error: "Failed to update" };
        }
      } else {
        return { error: "Invalid credentials" };
      }
    } else {
      return { error: "User not found. Please register to log in" };
    }
  } catch (error) {
    return { error: "Failed to log in" };
  }
};

export const logoutUser = async (currentUser) => {
  const { email } = currentUser;
  try {
    await connectToDB();

    const checkUser = await UserModel.findOne({ email });

    if (checkUser) {
      const updateStatus = await UserModel.updateOne(
        { email },
        { $set: { isLoggedIn: false } }
      );

      if (updateStatus.modifiedCount > 0) {
        return { success: true, message: "User logged out" };
      } else {
        return { error: false, message: "Failed to logout user!" };
      }
    } else {
      return { error: false, message: "Cannot find user!" };
    }
  } catch (error) {
    return { error: false, message: "An error occured while logging out" };
  }
};
