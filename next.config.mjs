import "dotenv/config";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

/*  lägg till i .env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=JHb3qP8i/sTlK2Wz4x5nVlRmQzS/AeJ/1eU7nPy3D34=

JWT_SECRET=hejhej
*/

export default nextConfig;
