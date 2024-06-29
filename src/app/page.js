import LandingPage from "@/app/(pages)/home/home";

import { Box } from "@mui/material";

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
