"use client";
import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Logo from "/public/images/Logo/Logo.png";
import Image from "next/image";
import SignInModal from "../signin/signinmodal";
import Sidebar from "./sidebar/sidebar";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openSide, setOpenSide] = useState(false);

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

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setOpenSide(false);
    handleCloseModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setOpenSide(false);
  };

  const handleOpenSide = () => {
    setOpenSide(true);
  };

  const handleCloseSide = () => {
    setOpenSide(false);
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem 3rem",
        height: "5rem",
        alignItems: "center",
        marginTop: "0rem",
        boxShadow: "5",
        zIndex: "100",
        backdropFilter: "blur(10px)",
      }}
    >
      <Button
        href="/"
        sx={{
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <Image src={Logo} width={100} height={100} alt="Tenants Logo" />
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
      <Box
        sx={{
          display: "flex",
          gap: "0.5rem",
          alignContent: "center",
        }}
      >
        {navOptions.map((item, idx) => (
          <Button
            key={idx}
            href={item.link}
            sx={{
              color: "#F1F1F1",
              gap: "1rem",
              transition: "0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(225,225,225,0.6)",
                transform: "scale(1.1)",
              },
            }}
          >
            <Typography
              sx={{
                position: "relative",
                top: "0.1rem",
                textTransform: "none",
                fontSize: "1.2rem",
              }}
            >
              {item.text}
            </Typography>
          </Button>
        ))}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {!isLoggedIn ? (
          <Button
            sx={{
              marginTop: "0.3rem",
              color: "#F1F1F1",
              transition: "0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(225,225,225,0.6)",
              },
            }}
            onClick={handleOpenModal}
          >
            <Typography sx={{ textTransform: "none" }}>Sign In</Typography>
          </Button>
        ) : (
          <Button
            sx={{
              marginTop: "0.3rem",
              color: "#F1F1F1",
              transition: "0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(225,225,225,0.6)",
              },
            }}
            onClick={handleLogout}
          >
            <Typography sx={{ textTransform: "none" }}>Sign Out</Typography>
          </Button>
        )}

        <Typography sx={{ color: "gray" }}>|</Typography>
        {/* Byt till en ikon som togglar från en måne till en sol */}
        <Button sx={{ marginTop: "0.3rem", color: "#F1F1F1" }}>Theme</Button>
      </Box>

      <SignInModal
        open={openModal}
        handleCloseModal={handleCloseModal}
        handleLogin={handleLogin}
      />

      <Box sx={{ position: "absolute" }}>
        {isLoggedIn ? (
          <Sidebar
            open={handleOpenSide}
            close={handleCloseSide}
            handleLogout={handleLogout}
          />
        ) : (
          <Sidebar open={openSide} close={handleCloseSide} />
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
