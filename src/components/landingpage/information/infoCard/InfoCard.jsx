import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const InfoCard = ({ itemText, itemAmount, itemIcon }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "14rem",
        height: "auto",
        borderRadius: "1rem",
        opacity: "0.8",
        border: "1px solid silver",

        // filter: "blur(2px)",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: "3rem", color: "rgba(170,170,170,0.9)" }}>
          {itemIcon}
        </Typography>
        <Typography sx={{ fontSize: "2rem", fontWeight: "500" }}>
          {itemAmount}
        </Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>{itemText}</Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
