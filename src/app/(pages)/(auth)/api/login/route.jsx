import connectToDB from "@/lib/dbConnect";
import UserModel from "@/lib/models";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    await connectToDB();

    const user = await UserModel.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 404 }
      );
    }

    const updateUser = await UserModel.updateOne(
      { email },
      { $set: { isLoggedIn: true } }
    );

    return NextResponse.json(
      { message: "User logged in", user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occured while logging in",
      },
      { status: 500 }
    );
  }
}
