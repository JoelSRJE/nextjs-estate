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
import { registerUser } from "@/lib/actions";

const SignUpModal = ({ open, close, openLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const result = await registerUser(formData);
      if (result.success) {
        console.log("Sucessfully registered!");
        setFormData({ username: "", email: "", password: "" });
        setError(null);
        close();
      } else {
        setError(result.error || "Faile to register");
      }
    } catch (error) {
      console.error("Failed to register", error);
      setError("Failed to register. Please try again!");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="signup-dialog-title"
      aria-describedby="signup-dialog-description"
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
          Sign Up
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
          label="Username"
          type="text"
          variant="outlined"
          name="username"
          value={formData.username}
          onChange={handleFormDataChange}
        />
        <TextField
          margin="dense"
          label="Email Address"
          type="email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleFormDataChange}
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleFormDataChange}
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
          onClick={handleRegisterClick}
        >
          Sign Up
        </Button>
        <Typography>
          Already have an account? <Button onClick={openLogin}>Login</Button>
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpModal;
