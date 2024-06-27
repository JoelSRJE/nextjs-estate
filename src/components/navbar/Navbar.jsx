import { Box, Typography, Button } from "@mui/material";
import React from "react";

const Navbar = () => {
  const navOptions = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/",
      text: "Available",
    },
    {
      link: "/",
      text: "About Us",
    },
    {
      link: "/",
      text: "Contact",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem 1rem",
        height: "4rem",
        border: "2px solid gray",
        alignItems: "center",
      }}
    >
      <Typography>Logo</Typography>

      <Box sx={{ display: "flex", gap: "0.5rem" }}>
        {navOptions.map((item, idx) => (
          <Button
            key={idx}
            sx={{
              textDecoration: "none",
              color: "black",
              gap: "1rem",
              "&:hover": { backgroundColor: "#282828" },
            }}
          >
            {item.text}
          </Button>
        ))}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button>Log In</Button>
        <Typography>|</Typography>
        <Button>Theme</Button>
      </Box>
    </Box>
  );
};

export default Navbar;
