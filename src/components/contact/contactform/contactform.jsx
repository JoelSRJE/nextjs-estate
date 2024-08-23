"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendMessage = async () => {
    if (!name || !email || !phoneNumber || !message) {
      setErrorMessage("All fields are required!");
      return;
    }

    try {
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Phone number: ", phoneNumber);
      console.log("Message: ", message);

      setIsSuccessfull(true);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setErrorMessage(
        "Message sent, we'll be in touch with you within a few days. Thank you for contacting us!"
      );
    } catch (error) {
      setErrorMessage("Failed to sent message. Please try again later.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        width: "100vw",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          width: "40rem",
          color: "#FFF",
        }}
      >
        <Typography sx={{ width: "12rem", fontSize: "2rem" }}>
          Get in Touch
        </Typography>
        <Typography sx={{ width: "40rem", fontSize: "1.2rem" }}>
          If you encounter any issues or have questions about renting any of our
          commercial or residential properties, please dont hesitate to reach
          out. We're here to assist you and provide the information you need.
          Feel free to contact us with any inquiries or interest you might have
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: "4rem" }}>
        {/* Left side - svg */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "40rem",
            height: "40rem",
          }}
        >
          <img
            src="/images/contact/contact.svg"
            alt="Contact Icon"
            style={{ width: "40rem", height: "40rem" }}
          />
        </Box>
        {/* Right side - contact form */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "25rem",
            height: "40rem",
            gap: "1rem",
          }}
        >
          <TextField
            type="text"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              width: "25rem",
              "& label": { color: "#FFF" },
              "& .MuiInputBase-input": { color: "#FFF" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFF",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(41, 73, 128, 0.8)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFF",
                },
              },
            }}
          />
          <TextField
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: "25rem",
              "& label": { color: "#FFF" },
              "& .MuiInputBase-input": { color: "#FFF" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFF",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(41, 73, 128, 0.8)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFF",
                },
              },
            }}
          />
          <TextField
            type="text"
            label="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{
              width: "25rem",
              "& label": { color: "#FFF" },
              "& .MuiInputBase-input": { color: "#FFF" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFF",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(41, 73, 128, 0.8)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFF",
                },
              },
            }}
          />
          <TextField
            type="textarea"
            label="Write your message here.."
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              width: "25rem",
              "& label": { color: "#FFF" },
              "& .MuiInputBase-input": { color: "#FFF" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFF",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(41, 73, 128, 0.8)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFF",
                },
              },
            }}
          />
          <Button
            onClick={sendMessage}
            sx={{
              color: "#FFF",
              border: "1px solid transparent",
              "&:hover": { border: "1px solid #d98324" },
            }}
          >
            Submit
          </Button>
          {isSuccessfull ? (
            <Typography sx={{ color: "green", fontSize: "1.2rem" }}>
              {errorMessage}
            </Typography>
          ) : (
            <Typography sx={{ color: "red", fontSize: "1.2rem" }}>
              {errorMessage}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
