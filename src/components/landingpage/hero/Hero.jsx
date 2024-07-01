"use client";
import React from "react";
import { Box, Typography, Zoom, Button } from "@mui/material";
import Image from "next/image";
import townImg2 from "/public/images/Hero/townImg2.png";

const Hero = () => {
  const heroStyle = {
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#17253d",
      }}
    >
      <Image src={townImg2} alt="Town square of city" style={heroStyle} />

      {/* overlay */}
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0.4rem",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#F1F1F1",
          gap: "2rem",
        }}
      >
        <Zoom in={true} style={{ transitionDelay: "100ms" }}>
          <Typography
            sx={{
              position: "relative",
              bottom: "8rem",
              fontSize: "3.5rem",
              fontWeight: "700",
            }}
          >
            Hello and welcome to{" "}
            <span style={{ color: "#add8e6" }}>Tenants</span>
          </Typography>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "250ms" }}>
          <Typography
            sx={{
              position: "relative",
              bottom: "10rem",
              fontSize: "3.5rem",
              fontWeight: "700",
            }}
          >
            Located in &lt; <span style={{ color: "#add8e6" }}>City</span> &gt;
          </Typography>
        </Zoom>

        <Zoom in={true} style={{ transitionDelay: "450ms" }}>
          <Button
            sx={{
              position: "relative",
              bottom: "3rem",
              border: "2px solid #F1F1F1",
              borderRadius: "1rem",
              textAlign: "center",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              transition: "0.5s ease",
              "&:hover": {
                border: "2px solid #add8e6",
                backgroundColor: "rgba(173,216,230,0.2)",
              },
            }}
          >
            <Typography
              sx={{
                color: "#F1F1F1",
                fontSize: "1.3rem",
              }}
            >
              Explore
            </Typography>
          </Button>
        </Zoom>
      </Box>
    </Box>
  );
};

export default Hero;
