import { Box, Card } from "@mui/material";
import React from "react";

const InfoCard = ({ item }) => {
  console.log(item);
  return <Card>{item.text}</Card>;
};

export default InfoCard;
