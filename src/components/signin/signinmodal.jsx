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

const SignInModal = ({ open, close, login, openRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLoginClick = async () => {};

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
          backgroundColor: "rgba(0,0,0,0.7)",
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
          autoFocus
          margin="dense"
          label="Email Address"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography sx={{ color: "red", fontSize: "1rem" }}>
            {error}
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
          onClick={login}
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
