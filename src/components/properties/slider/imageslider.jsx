import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const ImageSlider = ({ selectedObject }) => {
  const [index, setIndex] = useState(0);

  const handleNextImage = () => {
    setIndex((nextIndex) =>
      nextIndex === selectedObject.length - 1 ? 0 : nextIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? selectedObject.length - 1 : prevIndex - 1
    );
  };

  const getDisplayedImages = () => {
    if (selectedObject.length < 3) {
      return selectedObject;
    }

    const currentIndex = index;
    const secondIndex = (index + 1) % selectedObject.length;
    const thirdIndex = (index + 2) % selectedObject.length;

    return [
      selectedObject[currentIndex],
      selectedObject[secondIndex],
      selectedObject[thirdIndex],
    ];
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "40rem",
        height: "10rem",
        mx: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Button
        onClick={handlePreviousImage}
        sx={{
          width: "2rem",
          height: "4rem",
          color: "#FFF",
          border: "1px solid #d98324",
          position: "relative",
          left: "-2rem",
          transition: "transform 0.1s ease-in",
          "&:hover": {
            border: "1px solid #d98324",
            transform: "scale(1.1)",
          },
        }}
      >
        <FaAngleLeft style={{ fontSize: "1.5rem" }} />
      </Button>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          width: "35rem",
          border: "1px solid #d98324",
          justifyContent: "center",
          borderRadius: "0.5rem",
        }}
      >
        {getDisplayedImages().map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`Interior images ${idx + 1}`}
            style={{
              width: "11rem",
              height: "10.5rem",
              transition: "transform 0.5s ease-in-out",
            }}
          />
        ))}
      </Box>

      <Button
        onClick={handleNextImage}
        sx={{
          width: "2rem",
          height: "4rem",
          color: "#FFF",
          border: "1px solid #d98324",
          position: "relative",
          right: "-2rem",
          transition: "transform 0.1s ease-in",
          "&:hover": {
            border: "1px solid #d98324",
            transform: "scale(1.1)",
          },
        }}
      >
        <FaAngleRight style={{ fontSize: "1.5rem" }} />
      </Button>
    </Box>
  );
};

export default ImageSlider;
