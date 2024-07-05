import connectToDB from "./dbConnect";
import { revalidatePath } from "next/cache";
import UserModel from "./models";

export const registerUser = async ({ username, email, password }) => {
  try {
    await connectToDB();
    const newUser = new UserModel({
      username,
      email,
      password,
    });

    await newUser.save();
    revalidatePath("/");

    console.log("Sucessfully registered user: ", newUser);
    return { sucess: true };
  } catch (error) {
    console.error("Failed to register user:", error);
    return { error: "Something went wrong with registering you" };
  }
};
