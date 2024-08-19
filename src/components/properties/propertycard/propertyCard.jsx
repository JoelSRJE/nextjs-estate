"use client";

import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const PropertyCard = ({ property }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "15rem",
        width: "16rem",
        borderRadius: "0.5rem",
        boxShadow: "5",
        transition: "0.3s ease",
        // #17253d
        backgroundColor: "#283e63",
        "&:hover": { scale: "1.05" },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={property.images[0]}
          alt="property image"
          sx={{
            objectFit: "fill",
            height: "10rem",
            borderBottom: "1px solid silver",
          }}
        />
        <CardContent sx={{ color: "#FFF" }}>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: "600",
              marginBottom: "0.2rem",
            }}
          >
            {property.address} {property.city}
          </Typography>
          <Typography sx={{ fontSize: "1.2rem" }}>
            {property.price} kr/month
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
