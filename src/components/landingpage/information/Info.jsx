"use client";
import React from "react";
import people from "/public/images/Hero/people.png";
import Image from "next/image";
import { Box, Typography, Button, Grid } from "@mui/material";
import { FaHandshake, FaHouse, FaUsers } from "react-icons/fa6";
import InfoCard from "./infoCard/Infocard";

const InfoSection = () => {
  /*
    Högra sidan ideér:
    en kort information ruta med knapp nedanför som leder till /about
    Antalet boende, antalet fastigheter, antalet anställda i tre rutor
*/

  const info = [
    {
      icon: <FaHandshake />,
      amount: "46",
      text: "Occupants",
    },
    {
      icon: <FaHouse />,
      amount: "12",
      text: "Properties",
    },
    {
      icon: <FaUsers />,
      amount: "10",
      text: "Employees",
    },
  ];

  const peopleStyle = {
    width: "50vw",
    height: "80vh",
    objectFit: "contain",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        padding: "1rem",
        backgroundColor: "#17253d",
        color: "#F1F1F1",
        zIndex: "10",
        boxShadow: "5",
      }}
    >
      {/* Left side */}
      <Box sx={{ marginTop: "10rem" }}>
        {/* Image */}
        <Image src={people} alt="People in a meeting" style={peopleStyle} />
      </Box>

      {/* Right side */}
      <Box sx={{ marginTop: "15rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderBottom: "2px solid #F1F1F1",
            width: "60%",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              width: "1rem",
              height: "10rem",
              backgroundColor: "beige",
              borderRadius: "0.4rem",
            }}
          />
          <Box>
            <Typography sx={{ fontSize: "3rem", fontWeight: "500" }}>
              Welcome to
            </Typography>
            <Typography
              sx={{ fontSize: "4rem", fontWeight: "600", color: "#add8e6" }}
            >
              Tenants AB
            </Typography>
          </Box>
        </Box>
        <Box sx={{ paddingTop: "2rem", paddingBottom: "2rem", width: "60%" }}>
          <Typography sx={{ fontSize: "1.4rem", letterSpacing: "1px" }}>
            At Tenants, our mission is to provide top-quality residential and
            commercial properties to meet the diverse needs of our clients. We
            are committed to creating safe and comfortable environments where
            people can live and work. With a dedicated team and a passion for
            quality, we strive to offer our tenants the best possible
            experience. Welcome to Tenants—your home and office await!
          </Typography>
        </Box>
        <Button
          href="/about"
          sx={{
            marginTop: "3rem",
            marginBottom: "6rem",
            textTransform: "none",
            padding: "0.5rem 2rem 0.5rem 2rem",
            border: "1px solid #add8e6",
            transition: "0.3s ease",
            "&:hover": { transform: "scale(1.1)" },
          }}
        >
          <Typography sx={{ fontSize: "1.5rem", color: "#add8e6" }}>
            About Us
          </Typography>
        </Button>
        <Box>
          <Grid sx={{ display: "flex", gap: "2rem" }}>
            {info.map((item, idx) => (
              <Grid item key={idx}>
                <InfoCard
                  itemText={item.text}
                  itemAmount={item.amount}
                  itemIcon={item.icon}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoSection;
