"use client";
import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { FaRegTrashCan } from "react-icons/fa6";
import { db, storage } from "@/lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
      // Ladda upp poster image till Firebase Storage
      let posterURL = "";
      if (poster) {
        const posterRef = ref(storage, `posters/${poster.name}`);
        const posterSnapshot = await uploadBytes(posterRef, poster);
        posterURL = await getDownloadURL(posterSnapshot.ref);
      }

      // Ladda upp images till Firebase Storage
      const imageUrls = [];
      for (const image of images) {
        const imageRef = ref(storage, `images/${image.name}`);
        const imageSnapshot = await uploadBytes(imageRef, image);
        const imageUrl = await getDownloadURL(imageSnapshot.ref);
        imageUrls.push(imageUrl);
      }

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

      await addDoc(collection(db, "properties"), data);
      console.log("Property created successfully!");

      clearFields();
    } catch (error) {
      console.error("Error creating property: ", error);
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
                key={idx}
                sx={{
                  position: "relative",
                  width: "8rem",
                  height: "8rem",
                }}
              >
                <img
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
