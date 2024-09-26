import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#17253d",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: "0.5rem" }}>
        <Box
          sx={{
            width: "1rem",
            height: "2rem",
            backgroundColor: "#F0EAD6",
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
          About
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Box
          sx={{
            height: "34rem",
            borderBottomRightRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        >
          {/* Left side - info */}
          <Box
            sx={{
              display: "flex",
              height: "34rem",
              width: "40rem",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.2rem",
                color: "#FFF",
              }}
            >
              Welcome to Tenants, your trusted partner in property rentals. We
              specialize in providing high-quality residential and commercial
              spaces tailored to meet the needs of individuals and businesses
              alike. Whether you're looking for a cozy apartment to call home or
              a prime location for your business, Tenants is here to help you
              find the perfect space. With a focus on customer satisfaction and
              community development, our mission is to create comfortable,
              functional, and modern spaces that cater to diverse lifestyles and
              industries. Our portfolio includes a wide range of properties,
              from stylish apartments to versatile retail and office spaces, all
              strategically located to offer convenience and accessibility. At
              Tenants, we believe in fostering long-lasting relationships with
              our clients. Our dedicated team is committed to providing
              personalized service and ensuring a seamless rental experience
              from start to finish. Let us help you find your next home or
              business location. At Tenants, we’re more than just a property
              company—we're building communities and providing spaces where you
              can thrive.
            </Typography>
          </Box>
        </Box>

        {/* Right side - svg */}
        <Box>
          <img
            src="/images/about/about.svg"
            alt="Contact Icon"
            style={{ width: "40rem", height: "40rem" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
