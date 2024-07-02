import Hero from "@/components/landingpage/hero/hero";
import InfoSection from "@/components/landingpage/information/info";
import { Box } from "@mui/material";
import React from "react";
import Properties from "@/components/landingpage/properties/properties";
import About from "../about/page";

const LandingPage = () => {
  return (
    <Box>
      {/* <Hero /> */}
      <About />
      <InfoSection />
      <Properties />
    </Box>
  );
};

export default LandingPage;
