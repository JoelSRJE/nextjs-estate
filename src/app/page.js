import LandingPage from "@/app/(pages)/home/home";

import { Box } from "@mui/material";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

/*  Todo

Skapa en sidomeny för när man är inloggad
Skapa "about sidan"
skapa "contact sidan"
Skapa en backend och koppla det så man kan skapa "listings"

*/

export default async function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#17253d",
        height: "100vh",
        width: "100vw",
      }}
    >
      <LandingPage />
    </Box>
  );
}
