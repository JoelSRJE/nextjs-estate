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

        try {
          await connectToDB();

          const user = await UserModel.findOne({ email });

          if (user) {
            console.log("User found:", user);

            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );

            if (!passwordsMatch) {
              return null;
            }

            const updatedUser = await UserModel.updateOne(
              { email },
              { $set: { isLoggedIn: true } }
            );

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
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 60 * 60,
  },
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session(session, token) {
      session.user = token;
      return session;
    },
  },
  site: process.env.NEXTAUTH_URL,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
