"";
import React from "react";
import { Box, Typography } from "@mui/material";
import townImg2 from "/public/images/Hero/townImg2.png";
import { buildings } from "./examples";
import PropertyCard from "./propertycard.jsx/propertycard";

const Properties = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(to right, #add8e6, #F1F1F1)",
        // backgroundImage: `url(${townImg2.src})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <Box
            sx={{
              width: "1rem",
              height: "2rem",
              backgroundColor: "beige",
              borderRadius: "0.4rem",
            }}
          />
          <Typography
            sx={{
              position: "relative",
              bottom: "0.2rem",
              fontSize: "2rem",
              fontWeight: "600",
              color: "#F1F1F1",
            }}
          >
            Our Properties
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {buildings.map((item, idx) => (
            <PropertyCard
              key={idx}
              propertyImage={item.propertyImage}
              propertyName={item.propertyName}
              isFirst={idx === 0}
              isLast={idx === 1}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Properties;
