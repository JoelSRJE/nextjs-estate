import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        paddingTop: "5rem",
        backgroundColor: "#17253d",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "1rem",
          height: "3rem",
          backgroundColor: "beige",
          borderRadius: "0.4rem",
        }}
      />
      <Typography sx={{ fontSize: "3rem" }}>About</Typography>
      <Box
        sx={{
          display: "flex",
          height: "40rem",
          width: "40rem",
          background: "linear-gradient(to right, #add8e6, #F1F1F1)",
        }}
      >
        <Typography>
          Welcome to Tenants, your trusted partner in property rentals. We
          specialize in providing high-quality residential and commercial spaces
          tailored to meet the needs of individuals and businesses alike.
          Whether you're looking for a cozy apartment to call home or a prime
          location for your business, Tenants is here to help you find the
          perfect space. With a focus on customer satisfaction and community
          development, our mission is to create comfortable, functional, and
          modern spaces that cater to diverse lifestyles and industries. Our
          portfolio includes a wide range of properties, from stylish apartments
          to versatile retail and office spaces, all strategically located to
          offer convenience and accessibility. At Tenants, we believe in
          fostering long-lasting relationships with our clients. Our dedicated
          team is committed to providing personalized service and ensuring a
          seamless rental experience from start to finish. Let us help you find
          your next home or business location. At Tenants, we’re more than just
          a property company—we're building communities and providing spaces
          where you can thrive.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
