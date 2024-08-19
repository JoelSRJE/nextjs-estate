"use client";

import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { getProperties } from "@/lib/getProperties";
import { PropertyCard } from "@/components/properties/propertycard/propertyCard";
import { ShowProperty } from "@/components/properties/showproperty/showProperty";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);
  const [openProductModal, setOpenProductModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const fetchedProperties = await getProperties();
        setProperties(fetchedProperties);
        setAllProperties(fetchedProperties);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperties();
  }, []);

  const searchProperty = () => {
    try {
      if (searchInput.trim() === "") {
        setProperties(allProperties);
      } else {
        filteredProperties = allProperties.filter((property) =>
          property.address.toLowerCase().includes(searchInput.toLowerCase())
        );

        setProperties(filteredProperties);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

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
      <Box sx={{ width: "70rem", marginTop: "6rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
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
                bottom: "4px",
                fontSize: "2rem",
                color: "#FFF",
              }}
            >
              Properties
            </Typography>
          </Box>

          <Box>
            <TextField
              type="text"
              variant="outlined"
              label="Search"
              size="small"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              sx={{
                "& label": { color: "#FFF" },
                "& .MuiInputBase-input": { color: "#FFF" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#FFF",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(41, 73, 128, 0.8)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#FFF",
                  },
                },
              }}
            />
            <Button
              onClick={searchProperty}
              sx={{ height: "2.5rem", color: "gray" }}
            >
              <FaMagnifyingGlass />
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginLeft: "1rem",
          marginRight: "1rem",
          width: "68rem",
          marginTop: "1rem",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {properties.length > 0 ? (
          properties.map((property, idx) => (
            <Box
              key={idx}
              onClick={() => handlePropertyClick(property)}
              sx={{ cursor: "pointer" }}
            >
              <PropertyCard property={property} />
            </Box>
          ))
        ) : (
          <Box>No results found...</Box>
        )}
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
