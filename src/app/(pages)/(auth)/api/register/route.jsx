import connectToDB from "@/lib/dbConnect";
import UserModel from "@/lib/models";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    await connectToDB();

    let user = await UserModel({ email });

    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const newUser = new UserModel({
      username,
      email,
      password,
      isLoggedIn: false,
    });

    await newUser.save();

    setCookie({ res }, "user", JSON.stringify({ email: user.email }), {
      maxAge: 60 * 60,
      path: "/",
    });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occured while registering the user",
      },
      { status: 500 }
    );
  }
}
