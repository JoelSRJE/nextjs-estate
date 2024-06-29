import Hero from "@/components/landingpage/hero/Hero";
import InfoSection from "@/components/landingpage/information/Info";
import { Box } from "@mui/material";
import React from "react";

const LandingPage = () => {
  return (
    <Box>
      <Hero />
      <InfoSection />
    </Box>
  );
};

export default LandingPage;
