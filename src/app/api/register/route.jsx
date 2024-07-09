import connectToDB from "@/lib/dbConnect";
import UserModel from "@/lib/models";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    await connectToDB();

    const newUser = new UserModel({
      username,
      email,
      password,
      isLoggedIn: false,
    });

    console.log(newUser);

    await newUser.save();

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred while registering the user.",
      },
      { status: 500 }
    );
  }
}
