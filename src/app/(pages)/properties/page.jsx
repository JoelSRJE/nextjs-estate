"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getProperties } from "@/lib/getProperties";
import { PropertyCard } from "@/components/properties/propertycard/propertyCard";
import { ShowProperty } from "@/components/properties/showproperty/showProperty";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);
  const [openProductModal, setOpenProductModal] = useState(false);

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

  const handlePropertyClick = (property) => {
    setSelectedObject(property);
    console.log("Selected Object: ", property);
    setOpenProductModal(true);
  };

  const openPropertyModal = () => setOpenProductModal(true);
  const closePropertyModal = () => setOpenProductModal(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "6rem",
        backgroundColor: "#17253d",
        height: "100vh",
        width: "100vw",
      }}
    >
      Properties
      <Box
        sx={{
          display: "flex",
          marginLeft: "1rem",
          marginRight: "1rem",
          width: "70rem",
          marginTop: "6rem",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {properties.map((property, idx) => (
          <Box
            key={idx}
            onClick={() => handlePropertyClick(property)}
            sx={{ cursor: "pointer" }}
          >
            <PropertyCard property={property} />
          </Box>
        ))}
      </Box>
      <Box>
        <ShowProperty
          selectedObject={selectedObject}
          open={openProductModal}
          close={closePropertyModal}
        />
      </Box>
    </Box>
  );
};

export default Properties;
