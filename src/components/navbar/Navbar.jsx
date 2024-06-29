import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Logo from "/public/images/Logo/Logo.png";
import Image from "next/image";

const Navbar = () => {
  const navOptions = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/properties",
      text: "Properties",
    },
    {
      link: "/about",
      text: "About Us",
    },
    {
      link: "/contact",
      text: "Contact",
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem 1rem",
        height: "5rem",
        alignItems: "center",
        marginTop: "0rem",
        boxShadow: "5",
        zIndex: "1000",
        // backgroundColor: "#17253d",
      }}
    >
      <Button
        href="/"
        sx={{
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <Image src={Logo} width={100} height={100} />
        <Typography
          sx={{
            position: "absolute",
            left: "6.3rem",
            color: "#add8e6",
            fontSize: "1.2rem",
            fontWeight: "600",
          }}
        >
          Tenants
        </Typography>
      </Button>

      <Box sx={{ display: "flex", gap: "0.5rem", alignContent: "center" }}>
        {navOptions.map((item, idx) => (
          <Button
            key={idx}
            href={item.link}
            sx={{
              textDecoration: "none",
              color: "#F1F1F1",
              gap: "1rem",
              transition: "0.3s ease-in",
              "&:hover": {
                backgroundColor: "rgba(225,225,225,0.6)",
                transform: "scale(1.1)",
              },
            }}
          >
            {item.text}
          </Button>
        ))}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          sx={{
            marginTop: "0.3rem",
            color: "#F1F1F1",
            transition: "0.3s ease-in",
            "&:hover": {
              backgroundColor: "rgba(225,225,225,0.6)",
            },
          }}
        >
          Log In
        </Button>
        <Typography sx={{ color: "gray" }}>|</Typography>
        {/* But till en ikon som togglar från en måne till en sol */}
        <Button sx={{ marginTop: "0.3rem", color: "#F1F1F1" }}>Theme</Button>
      </Box>
    </Box>
  );
};

export default Navbar;
