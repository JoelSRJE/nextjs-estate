import connectToDB from "@/lib/dbConnect";
import UserModel from "@/lib/models";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();
    const { email } = await req.json();
    const user = await UserModel.findOne({ email });

    if (user) {
      return NextResponse.json({ user });
    } else {
      return NextResponse.json({ user: null });
    }
  } catch (error) {
    console.error("Error in userExists endpoint:", error);
    return NextResponse.json(
      {
        message: "An error occurred while checking if user exists.",
      },
      { status: 500 }
    );
  }
}
