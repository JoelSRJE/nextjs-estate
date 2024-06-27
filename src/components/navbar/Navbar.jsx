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
      link: "/Properties",
      text: "Properties",
    },
    {
      link: "/About",
      text: "About Us",
    },
    {
      link: "/Contact",
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
        height: "4rem",
        alignItems: "center",
        marginTop: "1rem",

        zIndex: "1000",
      }}
    >
      <Button
        href="/"
        sx={{
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <Image src={Logo} width={100} height={100} />
      </Button>

      <Box sx={{ display: "flex", gap: "0.5rem" }}>
        {navOptions.map((item, idx) => (
          <Button
            key={idx}
            href={item.link}
            sx={{
              textDecoration: "none",
              color: "#282828",
              gap: "1rem",
              "&:hover": {
                backgroundColor: "#F1F1F1",
              },
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
