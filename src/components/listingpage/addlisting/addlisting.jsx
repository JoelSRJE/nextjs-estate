"use client";
import { Box, Typography, TextField } from "@mui/material";
import React, { useState } from "react";

/* 

Main poster
Images
Type // house, apartment etc.
size
rooms

price


*/

const AddListing = () => {
  const [poster, setPoster] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "40rem",
        width: "60rem",
        backgroundColor: "#F1F1F1",
        borderRadius: "1rem",
        padding: "1rem",
        marginTop: "2rem",
      }}
    >
      <Typography sx={{ color: "#282828", textAlign: "center" }}>
        Add Listing
      </Typography>

      {/* Pictures - left side */}
      <Box sx={{ flex: "1", marginTop: "3rem" }}>
        <Typography>Poster image</Typography>
        <TextField
          margin="dense"
          type="file"
          variant="outlined"
          name="poster"
          inputProps={{
            multiple: true,
          }}
          value={poster}
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
        />
      </Box>

      {/* Text - right side */}
      <Box sx={{ flex: "1", marginTop: "3rem" }}>
        <Typography>Type</Typography>
      </Box>
    </Box>
  );
};

export default AddListing;
