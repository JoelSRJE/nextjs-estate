"use client";
import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const AddListing = () => {
  const [poster, setPoster] = useState(null);
  const [images, setImages] = useState([]);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [type, setType] = useState("");
  const [floor, setFloor] = useState("");
  const [size, setSize] = useState("");
  const [rooms, setRooms] = useState("");
  const [price, setPrice] = useState("");

  const clearFields = () => {
    setPoster(null);
    setImages([]);
    setCity("");
    setAddress("");
    setZip("");
    setType("");
    setFloor("");
    setSize("");
    setRooms("");
    setPrice("");
  };

  const handlePosterChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setPoster(file);
    }
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const removeImage = (idx) => {
    const newImages = [...images];
    newImages.splice(idx, 1);
    setImages(newImages);
  };

  const createListing = async (e) => {
    e.preventDefault();

    try {
      const data = {
        poster: poster,
        images: images,
        city: city,
        address: address,
        zip: zip,
        type: type,
        floor: floor,
        size: size,
        rooms: rooms,
        price: price,
      };

      console.log("Data: ", data);

      const response = await fetch("api/addListing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.text();
      console.log("Response text: ", result);

      if (response.ok) {
        clearFields();
        console.log("Property registered: ", result);
      } else {
        console.log("Property failed: ", result);
      }
    } catch (error) {
      console.error("Property error: ", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        width: "61.5rem",
        backgroundColor: "#F1F1F1",
        borderRadius: "1rem",
        padding: "1.5rem",
        marginTop: "2rem",
        marginBottom: "2rem",
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
          {poster && (
            <img
              src={URL.createObjectURL(poster)}
              alt="Poster Preview"
              style={{ width: "8rem", height: "8rem" }}
            />
          )}
          <TextField
            margin="dense"
            type="file"
            variant="outlined"
            name="poster"
            onChange={handlePosterChange}
            // sx={{ marginBottom: "8rem" }}
          />

          <Typography>Images</Typography>
          <Box sx={{ display: "flex", flexdirection: "row", flexWrap: "wrap" }}>
            {images.map((image, idx) => (
              <Box
                sx={{
                  position: "relative",
                  width: "8rem",
                  height: "8rem",
                }}
              >
                <img
                  key={idx}
                  src={URL.createObjectURL(image)}
                  alt={`Image ${idx}`}
                  style={{ width: "8rem", height: "8rem" }}
                />
                <Button
                  onClick={() => removeImage(idx)}
                  sx={{
                    position: "absolute",
                    top: "2px",
                    left: "2px",
                    maxWidth: "1rem",
                    height: "2rem",
                    backgroundColor: "rgba(255,255,255,0.7)",
                    color: "gray",
                    "&:hover": {
                      color: "crimson",
                      backgroundColor: "rgba(255,255,255,0.7)",
                    },
                  }}
                >
                  <FaRegTrashCan />
                </Button>
              </Box>
            ))}
          </Box>

          <TextField
            margin="dense"
            type="file"
            variant="outlined"
            name="images"
            inputProps={{
              multiple: true,
            }}
            onChange={handleImagesChange}
          />
        </Box>

        {/* Text - right side */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            maxHeight: "30rem",
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
        <Button sx={{ padding: "0.5rem" }} onClick={createListing}>
          Create listing
        </Button>
      </Box>
    </Box>
  );
};

export default AddListing;
