import { Box, Card, Typography } from "@mui/material";
import React from "react";

const InfoCard = ({ itemText, itemAmount }) => {
  console.log(itemAmount);
  console.log(itemText);
  return (
    <Card>
      <Typography>{itemText}</Typography>
    </Card>
  );
};

export default InfoCard;
