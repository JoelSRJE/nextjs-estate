"use client";
import { Box, Typography, TextField, Button } from "@mui/material";
import { set } from "mongoose";
import React, { useState } from "react";

/* 
Main poster
Images

Type // house, apartment etc.
Floor // våning

size //kvadratmeter
rooms // antalet rum

Created // datum skapelse Auto i fyllt i databasen?
price // hyran
*/

const AddListing = () => {
  const [mainPoster, setMainPoster] = useState("");
  const [images, setImages] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [type, setType] = useState("");
  const [floor, setFloor] = useState("");
  const [size, setSize] = useState("");
  const [rooms, setRooms] = useState("");
  const [price, setPrice] = useState("");

  const clearFields = () => {
    setMainPoster("");
    setImages("");
    setCity("");
    setAddress("");
    setZip("");
    setType("");
    setFloor("");
    setSize("");
    setRooms("");
    setPrice("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "41.5rem",
        width: "61.5rem",
        backgroundColor: "#F1F1F1",
        borderRadius: "1rem",
        padding: "1.5rem",
        marginTop: "2rem",
      }}
    >
      <Typography
        sx={{
          color: "#282828",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        Add Listing
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {/* Pictures - left side */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "30rem",
            marginTop: "3rem",
          }}
        >
          <Typography>Poster image</Typography>
          <TextField
            margin="dense"
            type="file"
            variant="outlined"
            name="poster"
            value={mainPoster}
            onChange={(e) => setMainPoster(e.target.value)}
            sx={{ marginBottom: "8rem" }}
          />

          <Typography>Images</Typography>
          <TextField
            margin="dense"
            type="file"
            variant="outlined"
            name="images"
            inputProps={{
              multiple: true,
            }}
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
        </Box>

        {/* Text - right side */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            width: "30rem",
            marginTop: "3rem",
          }}
        >
          <Box>
            <Typography>City</Typography>
            <TextField
              margin="dense"
              type="text"
              variant="outlined"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Box>

          <Box>
            <Typography>Address</Typography>
            <TextField
              margin="dense"
              type="text"
              variant="outlined"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Box>

          <Box>
            <Typography>ZIP Code</Typography>
            <TextField
              margin="dense"
              type="text"
              variant="outlined"
              name="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </Box>

          <Box>
            <Typography>Type</Typography>
            <TextField
              margin="dense"
              type="text"
              variant="outlined"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </Box>

          <Box>
            <Typography>Floor</Typography>
            <TextField
              margin="dense"
              type="text"
              variant="outlined"
              name="floor"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            />
          </Box>

          <Box>
            <Typography>Size</Typography>
            <TextField
              margin="dense"
              type="text"
              variant="outlined"
              name="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </Box>

          <Box>
            <Typography>Rooms</Typography>
            <TextField
              margin="dense"
              type="text"
              variant="outlined"
              name="rooms"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
            />
          </Box>

          <Box>
            <Typography>Price</Typography>
            <TextField
              margin="dense"
              type="text"
              variant="outlined"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "4rem",
          marginRight: "4rem",
        }}
      >
        <Button sx={{ padding: "0.5rem" }} onClick={clearFields}>
          Clear fields
        </Button>
        <Button sx={{ padding: "0.5rem" }}>Create listing</Button>
      </Box>
    </Box>
  );
};

export default AddListing;
