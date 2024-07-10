"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useCookies } from "react-cookie";

const SignInModal = ({ open, close, openRegister, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies([
    "accessToken",
    "refreshToken",
    "currentUser",
  ]);

  // The user logs in if successfull
  const handleLoginClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successfull", data.user);

        const cookieOptions = { path: "/", secure: false, maxAge: 60 * 60 };
        setMessage("You've successfully logged in!");
        setIsSuccessfull(true);
        setIsLoggedIn(true);
        setCookie("accessToken", data.accessToken, cookieOptions);
        setCookie("refreshToken", data.refreshToken, cookieOptions);
        setCookie("currentUser", data.user, cookieOptions);

        setTimeout(() => {
          close();
          setMessage(null);
        }, 3000);
      } else {
        setMessage("Invalid credentials!");
        return;
      }
    } catch (error) {
      setMessage("Failed to login. Please try again!");
      console.log("Login error: ", error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="signin-dialog-title"
      aria-describedby="signin-dialog-description"
      PaperProps={{
        sx: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          maxWidth: "30rem",
          padding: "1.5rem",
          backgroundColor: "#F1F1F1",
          borderRadius: "1rem",
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <DialogTitle
          sx={{
            fontSize: "2rem",
            fontWeight: "600",
            color: "#add8e6",
            textShadow: "1px 1px ",
          }}
        >
          Login
        </DialogTitle>
        <Button sx={{ fontSize: "1.4rem", color: "#282828" }} onClick={close}>
          X
        </Button>
      </Box>

      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          margin="dense"
          label="Email Address"
          type="email"
          variant="outlined"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isSuccessfull ? (
          <Typography
            sx={{ color: "red", fontSize: "1.4rem", fontWeight: "600" }}
          >
            {message}
          </Typography>
        ) : (
          <Typography
            sx={{ color: "green", fontSize: "1.4rem", fontWeight: "600" }}
          >
            {message}
          </Typography>
        )}
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            color: "#282828",
            textTransform: "none",
            fontSize: "1.2rem",

            "&:hover": {
              backgroundColor: "#add8e6",
            },
          }}
          onClick={handleLoginClick}
        >
          Login
        </Button>
        <Typography>
          Forgot
          <Button sx={{ textTransform: "none" }}>Email / Password?</Button>
        </Typography>

        <Typography sx={{ position: "relative", left: "1rem" }}>
          Don't have an account? <Button onClick={openRegister}>Sign up</Button>
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

export default SignInModal;
