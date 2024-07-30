"use client";

import React from "react";
import { Card, CardActionArea, CardMedia } from "@mui/material";

export const PropertyCard = ({ property }) => {
  console.log("Property from parent: ", property);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",

        height: "16rem",
        width: "16rem",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={property.poster}
          alt="property image"
          sx={{ contain: "fill" }}
        />
      </CardActionArea>
    </Card>
  );
};
