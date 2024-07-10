import connectToDB from "@/lib/dbConnect";
import UserModel from "@/lib/models";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();

    const { currentUser } = await req.json();

    if (!currentUser || !currentUser.email) {
      return NextResponse.json(
        {
          message: "User not found in database, how are you logged in?!",
        },
        { status: 404 }
      );
    }

    const updateStatus = await UserModel.updateOne(
      { email: currentUser.email },
      { $set: { isLoggedIn: false } }
    );

    console.log("updateStatus: ", updateStatus);
    if (updateStatus.matchedCount === 0) {
      return NextResponse.json(
        {
          message: "User not found in database",
        },
        { status: 404 }
      );
    }

    if (updateStatus.modifiedCount === 0) {
      return NextResponse.json(
        {
          message: "Failed to update isLoggedIn status",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "User logged out" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occured while logging out",
      },
      { status: 500 }
    );
  }
}
