import connectToDB from "@/lib/dbConnect";
import UserModel from "@/lib/models";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        console.log("Credentials received:", { email, password }); // Log credentials

        try {
          await connectToDB();

          const user = await UserModel.findOne({ email });

          if (user) {
            console.log("User found:", user);

            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );
            console.log("Password match result:", passwordsMatch); // Log password match result

            if (!passwordsMatch) {
              return null; // Return null if passwords do not match
            }

            const updatedUser = await UserModel.updateOne(
              { email },
              { $set: { isLoggedIn: true } }
            );

            console.log("User updated with isLoggedIn: true");

            return user;
          } else {
            console.log("No user found with that email");
            return null;
          }
        } catch (error) {
          console.log("Error:", error);
          throw new Error("Error during authentication");
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET,
  },
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
