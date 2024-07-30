"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getProperties } from "@/lib/getProperties";
import { PropertyCard } from "@/components/properties/propertycard/propertyCard";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const fetchedProperties = await getProperties();
        setProperties(fetchedProperties);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperties();
  }, []);

  // console.log("Property sent from parent: ", properties);
  return (
    <Box
      sx={{
        paddingTop: "5rem",
        backgroundColor: "#17253d",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      Properties
      <Box sx={{ marginTop: "6rem" }}>
        {properties.map((property, idx) => (
          <Box key={idx}>
            <PropertyCard property={property} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Properties;
