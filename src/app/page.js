import LandingPage from "@/app/(pages)/home/home";

import { Box } from "@mui/material";

/*  Todo

Skapa en sidomeny för när man är inloggad
Skapa "about sidan"
skapa "contact sidan"
Skapa en backend och koppla det så man kan skapa "listings"

*/

export default function Home() {
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
