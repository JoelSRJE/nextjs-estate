import React from "react";
import { Box } from "@mui/material";
import ContactForm from "@/components/contact/contactform/contactform";

const Contact = () => {
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
      <ContactForm />
    </Box>
  );
};

export default Contact;
