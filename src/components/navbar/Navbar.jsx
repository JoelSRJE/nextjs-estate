"use client";
import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Logo from "/public/images/Logo/Logo.png";
import Image from "next/image";
import SignInModal from "../signin/signinmodal";
import Sidebar from "./sidebar/sidebar";
import SignUpModal from "../register/signupmodal";

const Navbar = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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

  const handleOpenSignInModal = () => {
    setOpenSignInModal(true);
  };

  const handleCloseSignInModal = () => {
    setOpenSignInModal(false);
  };

  const handleOpenSignUpModal = () => {
    setOpenSignUpModal(true);
  };

  const handleCloseSignUpModal = () => {
    setOpenSignUpModal(false);
  };

  const handleOpenFromRegister = () => {
    setOpenSignUpModal(false);
    setOpenSignInModal(true);
  };

  const handleOpenFromLogin = () => {
    setOpenSignInModal(false);
    setOpenSignUpModal(true);
  };

  const handleRegister = () => {
    setCloseSignUpModal(false);
  };

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setOpenSidebar(true);
    handleCloseSignInModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setOpenSidebar(false);
  };

  const handleOpenSidbar = () => {
    setOpenSidebar(true);
  };

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
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
          <Box>
            <Button
              sx={{
                marginTop: "0.3rem",
                color: "#F1F1F1",
                transition: "0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(225,225,225,0.6)",
                },
              }}
              onClick={handleOpenSignInModal}
            >
              <Typography sx={{ textTransform: "none" }}>Sign In</Typography>
            </Button>
            <Button
              sx={{
                marginTop: "0.3rem",
                color: "#F1F1F1",
                transition: "0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(225,225,225,0.6)",
                },
              }}
              onClick={handleOpenSignUpModal}
            >
              <Typography sx={{ textTransform: "none" }}>Sign Up</Typography>
            </Button>
          </Box>
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
        open={openSignInModal}
        close={handleCloseSignInModal}
        login={handleLogin}
        openRegister={handleOpenFromLogin}
      />
      <SignUpModal
        open={openSignUpModal}
        close={handleCloseSignUpModal}
        register={handleRegister}
        openLogin={handleOpenFromRegister}
      />

      <Box sx={{ position: "absolute" }}>
        {isLoggedIn ? (
          <Sidebar
            open={openSidebar}
            close={handleCloseSidebar}
            handleLogout={handleLogout}
          />
        ) : (
          <Sidebar open={openSidebar} close={handleCloseSidebar} />
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
