import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

const PropertyCard = ({ propertyImage, propertyName, isFirst, isLast }) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        borderTopLeftRadius: isFirst ? 8 : 0,
        borderBottomLeftRadius: isFirst ? 8 : 0,
        borderTopRightRadius: isLast ? 8 : 0,
        borderBottomRightRadius: isLast ? 8 : 0,
        cursor: "pointer",
        height: "40rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* overlay */}
      <CardMedia
        component="img"
        image={propertyImage}
        alt="Buildings"
        sx={{ height: "40rem", width: "35rem", objectFit: "fill" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#F1F1F1",
          transition: "0.4s ease",
          height: "40rem",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0)",
          },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            opacity: "0",
            fontSize: "3rem",
            textShadow: "6px 5px 10px  black",
            "&:hover": { opacity: "1" },
          }}
        >
          {propertyName}
        </Typography>
      </Box>
    </Card>
  );
};

export default PropertyCard;
