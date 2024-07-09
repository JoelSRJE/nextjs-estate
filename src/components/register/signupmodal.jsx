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
import { useRouter } from "next/navigation";

export const SignUpModal = ({ open, close, openLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState(null);
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  const router = useRouter();

  const handleRegisterClick = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setMessage("All fields must be filled in");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        console.log(user);
        setMessage("User already exists");
        return;
      }

      const resRegister = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          isLoggedIn,
        }),
      });

      console.log("ResRegister: ", resRegister);

      if (resRegister.ok) {
        setUsername("");
        setEmail("");
        setPassword("");
        setIsSuccessfull(true);
        setMessage("User registered successfully");
        setTimeout(() => {
          close();
          setMessage(null);
        }, 3000);
        router.push("/");
      } else {
        const data = await resRegister.json();
        console.log(data);
        setMessage(data.message || "User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
      setMessage("Failed to register. Please try again!");
    }
  };

  /*
  // Registers a new user if successfull.
  const handleRegisterClick = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(formData);

      if (result.success) {
        setIsSuccessfull(true);
      } else {
        setMessage(result.error);
      }
    } catch (error) {
      setMessage("Failed to register. Please try again!");
    }
    setFormData({
      username: "",
      email: "",
      password: "",
    });
    setMessage("You're account has been registered!");
    setTimeout(() => {
      close();
      setMessage(null);
    }, 3000);
  };
*/

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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
