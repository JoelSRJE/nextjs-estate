import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import townImg from "/public/images/Hero/townImg.png";

const Hero = () => {
  const heroStyle = {
    width: "100vw",
    height: "auto",

    objectFit: "contain",
  };

  return (
    <Box
      sx={{
        position: "absolute",
        height: "auto",
      }}
    >
      <Image src={townImg} alt="Town square of city" style={heroStyle} />{" "}
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#F1F1F1",
          transition: "0.3s ease-in",
        }}
      >
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "600",
          }}
        >
          Welcome to <br />
          Tenants AB
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
