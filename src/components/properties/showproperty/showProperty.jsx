import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  Divider,
  TextField,
} from "@mui/material";
import ImageSlider from "../slider/imageslider";

export const ShowProperty = ({ open, close, selectedObject }) => {
  if (!selectedObject) return null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendMessage = async () => {
    if (!name || !email || !message) {
      setErrorMessage("All fields are required!");
      return;
    }

    try {
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Message: ", message);

      setIsSuccessfull(true);
      setName("");
      setEmail("");
      setMessage("");
      setErrorMessage(
        "Message sent, we'll be in touch with you within a few days!"
      );
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  // console.log("selectedObject in modal: ", selectedObject);

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="product-dialog-title"
      aria-describedby="product-dialog-description"
      PaperProps={{
        sx: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "auto",
          maxWidth: "100rem",
          maxHeight: "60rem",
          padding: "1.5rem",
          backgroundColor: "#17253d",
          borderRadius: "1rem",
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
      }}
    >
      <Button
        onClick={close}
        sx={{
          width: "1rem",
          marginBottom: "1rem",
          color: "#FFF",
          fontSize: "1rem",
        }}
      >
        X
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "auto",
          paddingBottom: "1rem",
        }}
      >
        {/* Left side, images */}
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            maxHeight: "46rem",
            maxWidth: "50rem",
            borderRadius: "2rem",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={selectedObject.poster}
              alt="Poster of property"
              style={{
                maxWidth: "35rem",
                height: "auto",
                border: "2px solid silver",
                borderRadius: "0.5rem",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "1rem",
              width: "50rem",
            }}
          >
            <ImageSlider selectedObject={selectedObject.images} />
          </Box>
        </Box>

        {/* Right side, information */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "1",
            maxWidth: "50rem",
            color: "#FFF",
            borderRadius: "2rem",
          }}
        >
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "2rem" }}
          >
            {selectedObject.type}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              marginTop: "1rem",
              flexWrap: "wrap",
              maxWidth: "40rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.4rem",
                width: "19rem",
                padding: "0.2rem",
              }}
            >
              Address: {selectedObject.address}
            </Typography>
            <Typography
              sx={{ fontSize: "1.4rem", width: "19rem", padding: "0.2rem" }}
            >
              City: {selectedObject.city}
            </Typography>
            <Typography
              sx={{ fontSize: "1.4rem", width: "19rem", padding: "0.2rem" }}
            >
              Floor: {selectedObject.floor}
            </Typography>
            <Typography
              sx={{ fontSize: "1.4rem", width: "19rem", padding: "0.2rem" }}
            >
              Size: {selectedObject.size}
            </Typography>
            <Typography
              sx={{ fontSize: "1.4rem", width: "19rem", padding: "0.2rem" }}
            >
              Zip: {selectedObject.zip}
            </Typography>
            <Typography
              sx={{ fontSize: "1.4rem", width: "19rem", padding: "0.2rem" }}
            >
              Price: {selectedObject.price} kr/month
            </Typography>
          </Box>

          <Divider
            sx={{
              marginTop: "2rem",
              marginBottom: "1rem",
              width: "90%",
              color: "#FFF",
              "&::before, &::after": {
                borderColor: "#FFF",
              },
            }}
          >
            <Typography sx={{ fontSize: "1.4rem" }}>Contact</Typography>
          </Divider>

          <Typography
            sx={{ fontSize: "1.1rem", marginBottom: "2rem", width: "30rem" }}
          >
            If you're interested, please fill out your information below, and
            we'll get back to you within 2-3 working days.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                width: "40rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "2rem",
                  width: "40rem",
                }}
              >
                <Box>
                  <TextField
                    type="text"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                      width: "15rem",
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
                </Box>

                <Box>
                  <TextField
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      width: "15rem",
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
                </Box>
              </Box>

              <Box>
                <TextField
                  label="Write your message here.."
                  type="textarea"
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  sx={{
                    width: "32rem",
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
              </Box>
            </Box>
            <Button
              onClick={sendMessage}
              sx={{
                color: "#FFF",
                border: "1px solid #FFF",
                "&:hover": {
                  border: "1px solid rgba(41, 73, 128, 0.8)",
                },
              }}
            >
              Send
            </Button>
            <Typography>{errorMessage}</Typography>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
