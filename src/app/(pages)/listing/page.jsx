import AddListing from "@/components/listingpage/addlisting/addlisting";
import { Box } from "@mui/material";
import React from "react";

const ListingPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#17253d",
        height: "100vh",
        width: "100vw",
        paddingTop: "5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <AddListing />
    </Box>
  );
};

export default ListingPage;
