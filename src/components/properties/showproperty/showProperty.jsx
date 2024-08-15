import React, { useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  Divider,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import ImageSlider from "../slider/imageslider";

export const ShowProperty = ({ open, close, selectedObject }) => {
  if (!selectedObject) return null;

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
            borderRight: "1px solid rgba(170, 200, 200, 0.7)",
            borderLeft: "1px solid rgba(170,200,200,0.7)",
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
            borderLeft: "1px solid rgba(170, 200, 200, 0.7)",
            borderRight: "1px solid rgba(170,200,200, 0.7)",
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
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
