import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        paddingTop: "5rem",
        backgroundColor: "#17253d",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "1rem",
          height: "3rem",
          backgroundColor: "beige",
          borderRadius: "0.4rem",
        }}
      />
      <Typography sx={{ fontSize: "3rem" }}>About</Typography>
      <Box sx={{ display: "flex" }}>
        <Typography>Welcome to Tenants</Typography>
      </Box>
    </Box>
  );
};

export default About;
